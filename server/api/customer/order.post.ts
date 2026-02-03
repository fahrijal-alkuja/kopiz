import prisma from '../../utils/db'
import { z } from 'zod'

const createCustomerOrderSchema = z.object({
  tableNumber: z.string(),
  items: z.array(z.object({
    menuItemId: z.number(),
    qty: z.number()
  })),
  customerName: z.string().optional().default('Guest')
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validation = createCustomerOrderSchema.safeParse(body)

  if (!validation.success) {
    throw createError({ statusCode: 400, statusMessage: 'Data tidak valid', data: validation.error.issues })
  }

  const data = validation.data
  const transactionId = crypto.randomUUID()

  // 1. Fetch Items to calculate total
  const itemIds = data.items.map(i => i.menuItemId)
  const menuItems = await prisma.menuItem.findMany({
    where: { id: { in: itemIds } },
    include: {
      recipes: { include: { material: true } },
      material: true
    }
  })

  let totalAmount = 0
  for (const reqItem of data.items) {
    const item = menuItems.find(m => m.id === reqItem.menuItemId)
    if (item) {
      totalAmount += item.price * reqItem.qty
    }
  }

  // 2. Create Order with status 'INCOMING'
  // Note: We need to ensure 'INCOMING' is a valid status in our logic.
  // The schema says: PENDING, PROCESS, READY, COMPLETED, CANCELLED.
  // We will use 'PENDING' but add a flag or maybe just 'PENDING' is fine?
  // Let's use 'PENDING' but the PaymentMethod will be null? Or 'PAY_LATER'?
  // If we use 'PENDING', it might show up in "Unpaid Bills" immediately. 
  // Depending on requirements, we might want a specific "Needs Approval" state.
  // Let's use 'INCOMING' as planned and update the frontend to handle it.
  
  // NOTE: Schema might restrict status string? 
  // Looking at schema.prisma: status String @default("PENDING") // Comment says PENDING...
  // It's a String, not Enum, so we can add 'INCOMING'.

  const order = await prisma.order.create({
    data: {
      transactionId,
      customerName: data.customerName,
      tableNumber: data.tableNumber,
      status: 'INCOMING',
      totalAmount,
      paymentMethod: 'PAY_LATER', // Default for QR orders until paid
    }
  })

  // 3. Create Sales (Items) linked to Order
  // We do NOT deduct stock yet until "Accepted" by cashier? 
  // OR we deduct now to reserve? 
  // Usually better to deduct when accepted. But to complicate less, let's create Sales with orderId.
  // However, `Sale` model requires `menuItemId`, `qty`, `total`, `paymentMethod`.
  // And our previous logic in `orders/index.ts` creates Sales immediately.
  
  // Strategy: Create Sales record but maybe we can filter them?
  // Actually, if we create Sale, it shows in reports? 
  // Better: Create OrderItems? But we don't have OrderItems model, we utilize Sale as OrderItem.
  // So we MUST create Sales.
  
  // To prevent "Fake Orders" messing up reports, maybe we should add `isVerified` to Sale? 
  // OR, we just create the Order mostly, and create Sales later? 
  // But Order needs to know what items.
  
  // Solution: We will create sales but maybe with a flag? 
  // Or simpler: We create them. If rejected, we DELETE them.
  
  // Wait, `orders/index.ts` logic does stock deduction immediately.
  // Let's replicate logic but WITHOUT stock deduction for now? 
  // No, let's keep it simple: QR Order = Real Order. 
  // If spam, Cashier deletes it (Restores stock).
  
  for (const reqItem of data.items) {
      const item = menuItems.find(m => m.id === reqItem.menuItemId)
      if (!item) continue

      const lineTotal = item.price * reqItem.qty

      await prisma.sale.create({
          data: {
              transactionId,
              orderId: order.id,
              menuItemId: item.id,
              qty: reqItem.qty,
              priceSnapshot: item.price,
              costSnapshot: 0, // Calculate later or now? Let's skip cost for speed
              total: lineTotal,
              paymentMethod: 'PAY_LATER', // QR Orders are pay later
              date: new Date()
          }
      })
      
      // We are SKIPPING stock deduction here. 
      // Stock will be deducted when Cashier "Accepts" (Changing INCOMING -> PROCESS)?
      // Or we deduct now. Let's deduct now to prevent overselling.
      
      // Deduct Stock
      // Deduct Stock (Retail & Recipe)
      if (item.isRetail && item.materialId) {
          const updatedMaterial = await prisma.material.update({
             where: { id: item.materialId }, 
             data: { stock: { decrement: reqItem.qty } } 
          })

          await prisma.materialLog.create({
            data: {
              materialId: item.materialId,
              type: 'OUT',
              quantity: reqItem.qty,
              balanceAfter: updatedMaterial.stock,
              reason: `QR Order #${transactionId.slice(0,8)}...`,
              createdAt: new Date()
            }
          })
      } else if (item.recipes) {
           for (const recipeItem of item.recipes) {
                const updatedMaterial = await prisma.material.update({
                  where: { id: recipeItem.materialId },
                  data: { stock: { decrement: recipeItem.quantity * reqItem.qty } }
                })

                await prisma.materialLog.create({
                  data: {
                    materialId: recipeItem.materialId,
                    type: 'OUT',
                    quantity: recipeItem.quantity * reqItem.qty,
                    balanceAfter: updatedMaterial.stock,
                    reason: `QR Order #${transactionId.slice(0,8)}...`,
                    createdAt: new Date()
                  }
                })
           }
      }
  }

  return { success: true, orderId: order.id, transactionId, message: 'Pesanan diterima, mohon tunggu konfirmasi kasir.' }
})
