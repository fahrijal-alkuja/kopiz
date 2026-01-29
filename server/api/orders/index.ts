import prisma from '../../utils/db'
import { z } from 'zod'
import { logActivity } from '../../utils/logger'

const createOrderSchema = z.object({
  customerName: z.string().optional().default('Guest'),
  tableNumber: z.string().optional(),
  items: z.array(z.object({
    menuItemId: z.number(),
    qty: z.number()
  })),
  paymentMethod: z.string(), // Cash, QRIS, PAY_LATER
  isTakeaway: z.boolean().optional(),
  promoId: z.number().optional().nullable(),
  discountAmount: z.number().optional().default(0)
})

export default defineEventHandler(async (event) => {
  const method = event.method
  const query = getQuery(event)
  const user = event.context.user

  if (method === 'GET') {
    const status = query.status as string
    const limit = query.limit ? parseInt(query.limit as string) : 50
    
    let where: any = {}
    if (status) {
      if (status.includes(',')) {
        where.status = { in: status.split(',') }
      } else {
        where.status = status
      }
    } else {
        // Default: Show orders from today
        const today = new Date()
        today.setHours(0,0,0,0)
        where.createdAt = { gte: today }
    }

    const orders = await prisma.order.findMany({
      where,
      include: {
        sales: {
          include: { menuItem: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    })
    
    return orders
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const validation = createOrderSchema.safeParse(body)
    
    if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Data tidak valid', data: validation.error.issues })
    }
    
    const data = validation.data
    
    // 1. Shift Check
    const activeShift = await (prisma as any).shift.findFirst({
        where: { status: 'OPEN' },
        orderBy: { createdAt: 'desc' }
    })

    if (!activeShift && user?.role !== 'OWNER') {
        throw createError({ statusCode: 403, statusMessage: 'Shift belum dibuka.' })
    }

    const transactionId = crypto.randomUUID()

    // 2. Fetch Packaging (Takeaway)
    let packagingMaterial: any = null
    if (data.isTakeaway) {
        packagingMaterial = await prisma.material.findFirst({
            where: { name: { contains: 'Kemasan', mode: 'insensitive' } }
        })
    }

    // 3. Prepare Items Data
    const itemIds = data.items.map(i => i.menuItemId)
    const menuItems = await prisma.menuItem.findMany({
        where: { id: { in: itemIds } },
        include: {
            material: true,
            recipes: { include: { material: true } }
        }
    })

    // Calculate Totals & Subtotals to distribute discount
    const subtotal = menuItems.reduce((sum, item) => {
        const reqItem = data.items.find(i => i.menuItemId === item.id)
        return sum + (item.price * (reqItem?.qty || 0))
    }, 0)
    
    const finalTotal = Math.max(0, subtotal - data.discountAmount)

    // 4. TRANSACTION
    const order = await prisma.$transaction(async (tx) => {
        // A. Create Order
        const newOrder = await tx.order.create({
            data: {
                transactionId,
                customerName: data.customerName,
                tableNumber: data.tableNumber,
                status: 'PENDING',
                totalAmount: finalTotal,
                paymentMethod: data.paymentMethod
            }
        })

        // B. Process Items (Sales & Stock)
        for (const reqItem of data.items) {
            const item = menuItems.find(m => m.id === reqItem.menuItemId)
            if (!item) continue

            const itemSubtotal = item.price * reqItem.qty
            const itemDiscount = subtotal > 0 ? ((itemSubtotal / subtotal) * data.discountAmount) : 0
            const lineTotal = parseFloat((itemSubtotal - itemDiscount).toFixed(2))

            // Cost Calculation
            let cost = 0
            // ... (Copy Logic from sales/index.ts for cost)
            if (item.isRetail && item.material) {
                cost = item.material.costPerUnit || 0
            } else if (item.recipes) {
                for (const r of item.recipes) {
                    cost += r.quantity * (r.material.costPerUnit || 0)
                }
            }
            if (data.isTakeaway && packagingMaterial) cost += (packagingMaterial.costPerUnit || 0)

            // Create Sale (Linked to Order)
            await tx.sale.create({
                data: {
                    transactionId, // Keep for backward compatibility/grouping
                    orderId: newOrder.id, // NEW LINK
                    menuItemId: item.id,
                    qty: reqItem.qty,
                    priceSnapshot: item.price,
                    costSnapshot: cost,
                    discountAmount: itemDiscount,
                    promoId: data.promoId || null,
                    total: lineTotal,
                    paymentMethod: data.paymentMethod,
                    shiftId: activeShift?.id || null,
                    date: new Date()
                }
            })

            // Stock Deduction (Same Logic)
            if (item.isRetail && item.materialId) {
                const mat = await tx.material.update({ where: { id: item.materialId }, data: { stock: { decrement: reqItem.qty } } })
                await (tx as any).materialLog.create({ 
                    data: { materialId: item.materialId, type: 'OUT', quantity: reqItem.qty, balanceAfter: mat.stock, reason: `Order #${transactionId.slice(0,6)}` } 
                })
            } else if (item.recipes) {
                for (const r of item.recipes) {
                    const mat = await tx.material.update({ where: { id: r.materialId }, data: { stock: { decrement: r.quantity * reqItem.qty } } })
                    await (tx as any).materialLog.create({ 
                         data: { materialId: r.materialId, type: 'OUT', quantity: r.quantity * reqItem.qty, balanceAfter: mat.stock, reason: `Order #${transactionId.slice(0,6)}` } 
                    })
                }
            }
        }
        
        // Takeaway Box Stock
        if (data.isTakeaway && packagingMaterial) {
             const mat = await tx.material.update({ where: { id: packagingMaterial.id }, data: { stock: { decrement: data.items.reduce((s,i)=>s+i.qty,0) } } })
             // Note: Reducing 1 box per item? Or per order? Original logic (sales/index.ts) seemed to reduce per item qty: `decrement: itemRequest.qty`. 
             // Ideally takeaway box is per transaction or per item. Let's stick to per item for now matching logic.
             // Wait, original logic: inside loop: `packagingMaterial` loop updates it. 
             // Here we are outside the loop. Let's do it once for total qty.
             await (tx as any).materialLog.create({ 
                 data: { materialId: packagingMaterial.id, type: 'OUT', quantity: data.items.reduce((s,i)=>s+i.qty,0), balanceAfter: mat.stock, reason: `Pkg #${transactionId.slice(0,6)}` } 
             })
        }

        return newOrder
    })

    return { success: true, order }
  }
})
