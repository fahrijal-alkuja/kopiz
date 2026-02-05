import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { materialId, quantity, pricePerUnit, supplier } = body

  return await prisma.$transaction(async (tx: any) => {
    // 1. Get current material
    const material = await tx.material.findUnique({ where: { id: materialId } })
    if (!material) throw createError({ statusCode: 404, statusMessage: 'Material not found' })

    // 2. Create Purchase Record
    const purchase = await tx.materialPurchase.create({
      data: {
        materialId,
        quantity,
        pricePerUnit,
        totalCost: quantity * pricePerUnit,
        supplier,
        date: new Date()
      }
    })

    // 3. Update Material Stock and Cost Per Unit (Using Weighted Average Cost)
    const currentStock = material.stock
    const currentCost = material.costPerUnit
    const newStock = currentStock + quantity
    
    // Calculate Weighted Average Cost
    // Formula: ((Total Value Old) + (Total Value New)) / Total Quantity
    // Prevent division by zero if total stock is 0 (shouldn't happen here as we just added quantity)
    let newCostPerUnit = pricePerUnit
    
    if (newStock > 0) {
      const totalValueOld = currentStock * currentCost
      const totalValueNew = quantity * pricePerUnit
      const rawCost = (totalValueOld + totalValueNew) / newStock
      newCostPerUnit = Math.round(rawCost)
    }

    const updatedMaterial = await tx.material.update({
      where: { id: materialId },
      data: {
        stock: { increment: quantity },
        costPerUnit: newCostPerUnit
      }
    })

    // 4. Log Movement
    await (tx as any).materialLog.create({
      data: {
        materialId,
        type: 'IN',
        quantity,
        balanceAfter: updatedMaterial.stock,
        reason: `Pembelian #${purchase.id} (${supplier || 'Tanpa Supplier'})`,
        createdAt: new Date()
      }
    })

    // 5. Create Expense Record (Automatic)
    await tx.expense.create({
      data: {
        description: `Stok: ${material.name} (${quantity} ${material.unit})`,
        category: 'HPP',
        amount: quantity * pricePerUnit,
        note: `Otomatis dari Pembelian #${purchase.id}. Supplier: ${supplier || '-'}`,
        date: new Date()
      }
    })

    return { success: true, purchase }
  })
})
