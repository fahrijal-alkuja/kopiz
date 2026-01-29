import prisma from '../../utils/db'
import { createSaleSchema, updateSaleSchema } from '../../utils/schemas'
import { logActivity } from '../../utils/logger'

export default defineEventHandler(async (event) => {
  const method = event.method
  const query = getQuery(event)
  const user = event.context.user

  if (method === 'GET') {
    // Filter by date (defaults to today)
    const dateStr = typeof query.date === 'string' ? query.date : undefined
    let where = {}
    
    if (dateStr) {
      const startOfDay = new Date(dateStr)
      startOfDay.setHours(0, 0, 0, 0)
      const endOfDay = new Date(dateStr)
      endOfDay.setHours(23, 59, 59, 999)
      
      where = {
        date: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    }

    const sales = await prisma.sale.findMany({
      where,
      include: {
        menuItem: true,
        order: true
      },
      orderBy: { createdAt: 'desc' }
    })
    return sales
  }

  if (method === 'POST') {
    const body = await readBody(event)
    
    // Validate input
    const validation = createSaleSchema.safeParse(body)
    if (!validation.success) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Data tidak valid',
        data: validation.error.issues
      })
    }
    
    const validatedData = validation.data
    
    // Normalize items
    let cartItems = validatedData.items || []
    if (cartItems.length === 0 && validatedData.menuItemId && validatedData.qty) {
      cartItems.push({
        menuItemId: validatedData.menuItemId,
        qty: validatedData.qty
      })
    }

    if (cartItems.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'Tidak ada item yang dipilih' })
    }

    // 1. Fetch active shift
    const activeShift = await (prisma as any).shift.findFirst({
      where: { status: 'OPEN' },
      orderBy: { createdAt: 'desc' }
    })

    // RULE: Barista/Kasir MUST have an active shift
    if (!activeShift && user?.role !== 'OWNER') {
      throw createError({ 
        statusCode: 403, 
        statusMessage: 'Shift belum dibuka. Harap buka kasir terlebih dahulu.' 
      })
    }
    
    const transactionId = crypto.randomUUID()

    // 2. Fetch Packaging Material if Takeaway
    let packagingMaterial: any = null
    if (validatedData.isTakeaway) {
      packagingMaterial = await prisma.material.findFirst({
        where: { name: { contains: 'Kemasan', mode: 'insensitive' } }
      })
    }

    // 3. BATCH FETCH: Get all required data in ONE query
    const itemIds = cartItems.map(i => i.menuItemId)
    
    // Fetch all menu items AND their recipes/materials deeply
    const menuItems = await (prisma as any).menuItem.findMany({
      where: { id: { in: itemIds } },
      include: {
        material: true,
        recipes: {
          include: { material: true }
        }
      }
    })

    const subtotal = menuItems.reduce((sum: number, item: any) => {
      const request = cartItems.find((i: any) => i.menuItemId === item.id)
      return sum + (item.price * (request?.qty || 0))
    }, 0)

    // 4. Process Transaction in ONE Transaction Block
    const result = await prisma.$transaction(async (tx: any) => {
      let createdSales: any[] = []

      // Prepare bulk data for sales creation? No, we need individual calculations per item
      // But we iterate IN MEMORY now, which is fast.
      
      for (const itemRequest of cartItems) {
        // Find pre-fetched item from array (No DB call here!)
        const item = menuItems.find((m: any) => m.id === itemRequest.menuItemId)
        if (!item) continue 

        const priceSnapshot = item.price
        const itemSubtotal = priceSnapshot * itemRequest.qty
        const itemDiscount = subtotal > 0 ? ((itemSubtotal / subtotal) * (validatedData.discountAmount || 0)) : 0
        const total = parseFloat((itemSubtotal - itemDiscount).toFixed(2))

        // Calculate Cost Snapshot
        let singleUnitCost = 0
        if (item.isRetail && item.material) {
          singleUnitCost = item.material.costPerUnit || 0
        } else if (item.recipes) {
          for (const recipeItem of item.recipes) {
            singleUnitCost += recipeItem.quantity * (recipeItem.material.costPerUnit || 0)
          }
        }

        if (validatedData.isTakeaway && packagingMaterial) {
          singleUnitCost += (packagingMaterial.costPerUnit || 0)
        }

        // Create Sale Record
        const sale = await tx.sale.create({
          data: {
            transactionId,
            menuItemId: item.id,
            qty: itemRequest.qty,
            priceSnapshot,
            costSnapshot: singleUnitCost,
            discountAmount: itemDiscount,
            promoId: validatedData.promoId || null,
            total,
            paymentMethod: validatedData.paymentMethod,
            shiftId: activeShift?.id || null,
            date: new Date()
          }
        })
        
        createdSales.push(sale)

        // Deduct Stock Logic (Still needs updates but logic is clean)
        if (item.isRetail && item.materialId) {
          const updatedMaterial = await tx.material.update({
            where: { id: item.materialId },
            data: { stock: { decrement: itemRequest.qty } }
          })
          
          await (tx as any).materialLog.create({
            data: {
              materialId: item.materialId,
              type: 'OUT',
              quantity: itemRequest.qty,
              balanceAfter: updatedMaterial.stock,
              reason: `Retail Sale #${transactionId.slice(0,8)}...`,
              createdAt: new Date()
            }
          })
        } else if (item.recipes) {
          for (const recipeItem of item.recipes) {
             const updatedMaterial = await tx.material.update({
              where: { id: recipeItem.materialId },
              data: { stock: { decrement: recipeItem.quantity * itemRequest.qty } }
            })

            await (tx as any).materialLog.create({
              data: {
                materialId: recipeItem.materialId,
                type: 'OUT',
                quantity: recipeItem.quantity * itemRequest.qty,
                balanceAfter: updatedMaterial.stock,
                reason: `Trx #${transactionId.slice(0,8)}...`,
                createdAt: new Date()
              }
            })
          }
        }

        if (validatedData.isTakeaway && packagingMaterial) {
           const updatedPkg = await tx.material.update({
            where: { id: packagingMaterial.id },
            data: { stock: { decrement: itemRequest.qty } }
          })

          await (tx as any).materialLog.create({
            data: {
              materialId: packagingMaterial.id,
              type: 'OUT',
              quantity: itemRequest.qty,
              balanceAfter: updatedPkg.stock,
              reason: `Takeaway Pkg (Trx #${transactionId.slice(0,8)})`,
              createdAt: new Date()
            }
          })
        }
      }
      
      return createdSales
    })

    if (user && user.userId) {
      await logActivity(user.userId, 'CREATE', 'SALE', transactionId, `Created Sale #${transactionId}`)
    }

    return result
  }

  if (method === 'DELETE') {
    const body = await readBody(event)
    
    // Handle Grouped Transaction Delete
    if (body.transactionId) {
      const sales = await (prisma as any).sale.findMany({
        where: { transactionId: body.transactionId },
        include: {
          menuItem: {
            include: { recipes: true }
          }
        }
      })

      if (sales.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Transaction not found' })
      }

      await prisma.$transaction(async (tx: any) => {
        for (const sale of sales) {
          // Restore stock
          if (sale.menuItem && sale.menuItem.recipes) {
            for (const recipeItem of sale.menuItem.recipes) {
              const updatedMaterial = await tx.material.update({
                where: { id: recipeItem.materialId },
                data: {
                  stock: {
                    increment: recipeItem.quantity * sale.qty
                  }
                }
              })

              // Log movement
              await (tx as any).materialLog.create({
                data: {
                  materialId: recipeItem.materialId,
                  type: 'IN',
                  quantity: recipeItem.quantity * sale.qty,
                  balanceAfter: updatedMaterial.stock,
                  reason: `Void Trx #${body.transactionId.slice(0,8)}...`,
                  createdAt: new Date()
                }
              })
            }
          }
        }

        // Delete all sales in transaction
        await tx.sale.deleteMany({
          where: { transactionId: body.transactionId }
        })

        // NEW: Delete assoc Order if exists
        try {
            await tx.order.delete({
                where: { transactionId: body.transactionId }
            })
        } catch (e) {
            // Ignore if order not found (legacy data)
        }
      })

      return { success: true }
    }

    if (user && user.userId) {
      await logActivity(user.userId, 'DELETE', 'SALE', body.transactionId, `Deleted Transaction #${body.transactionId}`)
    }

    // Handle Single Item Delete (Legacy or specific)
    const saleId = parseInt(body.id)
    const sale = await (prisma as any).sale.findUnique({
      where: { id: saleId },
      include: {
        menuItem: {
          include: { recipes: true }
        }
      }
    })

    if (!sale) {
      throw createError({ statusCode: 404, statusMessage: 'Sale not found' })
    }

    await prisma.$transaction(async (tx: any) => {
      // Restore stock
      if (sale.menuItem && sale.menuItem.recipes) {
        for (const recipeItem of sale.menuItem.recipes) {
          const updatedMaterial = await tx.material.update({
            where: { id: recipeItem.materialId },
            data: {
              stock: {
                increment: recipeItem.quantity * sale.qty
              }
            }
          })

          // Log movement
          await (tx as any).materialLog.create({
            data: {
              materialId: recipeItem.materialId,
              type: 'IN',
              quantity: recipeItem.quantity * sale.qty,
              balanceAfter: updatedMaterial.stock,
              reason: `Pembatalan Transaksi #${sale.id}`,
              createdAt: new Date()
            }
          })
        }
      }

      // Delete sale
      await tx.sale.delete({
        where: { id: saleId }
      })
    })

    if (user && user.userId) {
      await logActivity(user.userId, 'DELETE', 'SALE', String(saleId), `Deleted Sale #${saleId}`)
    }

    return { success: true }
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    const saleId = parseInt(body.id)

    const existingSale = await (prisma as any).sale.findUnique({
      where: { id: saleId },
      include: {
        menuItem: {
          include: { recipes: true }
        }
      }
    })

    if (!existingSale) {
      throw createError({ statusCode: 404, statusMessage: 'Sale not found' })
    }

    // Fetch new menu item details
    const newItem = await (prisma as any).menuItem.findUnique({
      where: { id: body.menuItemId },
      include: { recipes: true }
    })

    if (!newItem) {
      throw createError({ statusCode: 404, statusMessage: 'New Menu Item not found' })
    }

    const priceSnapshot = newItem.price
    const total = parseFloat((priceSnapshot * body.qty).toFixed(2))

    await prisma.$transaction(async (tx: any) => {
      // 1. Restore old stock
      if (existingSale.menuItem && existingSale.menuItem.recipes) {
        for (const recipeItem of existingSale.menuItem.recipes) {
          const updatedMaterial = await tx.material.update({
            where: { id: recipeItem.materialId },
            data: {
              stock: {
                increment: recipeItem.quantity * existingSale.qty
              }
            }
          })

          // Log movement
          await (tx as any).materialLog.create({
            data: {
              materialId: recipeItem.materialId,
              type: 'IN',
              quantity: recipeItem.quantity * existingSale.qty,
              balanceAfter: updatedMaterial.stock,
              reason: `Koreksi Transaksi #${saleId} (Pengembalian Stok Lama)`,
              createdAt: new Date()
            }
          })
        }
      }

      // 2. Deduct new stock
      if (newItem.recipes) {
        for (const recipeItem of newItem.recipes) {
          const updatedMaterial = await tx.material.update({
            where: { id: recipeItem.materialId },
            data: {
              stock: {
                decrement: recipeItem.quantity * body.qty
              }
            }
          })

          // Log movement
          await (tx as any).materialLog.create({
            data: {
              materialId: recipeItem.materialId,
              type: 'OUT',
              quantity: recipeItem.quantity * body.qty,
              balanceAfter: updatedMaterial.stock,
              reason: `Koreksi Transaksi #${saleId} (Penyesuaian Stok Baru)`,
              createdAt: new Date()
            }
          })
        }
      }

      // 3. Update sale
      await tx.sale.update({
        where: { id: saleId },
        data: {
          menuItemId: body.menuItemId,
          qty: parseInt(body.qty),
          priceSnapshot,
          total,
          paymentMethod: body.paymentMethod
        }
      })
    })

    if (user && user.userId) {
      await logActivity(user.userId, 'UPDATE', 'SALE', String(saleId), `Updated Sale #${saleId}`)
    }

    return { success: true }
  }
})
