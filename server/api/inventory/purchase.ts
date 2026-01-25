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

    // 3. Update Material Stock and Cost Per Unit
    // For simplicity, we update costPerUnit to the latest purchase price
    // A more advanced system would use Weighted Average Cost (WAC)
    const updatedMaterial = await tx.material.update({
      where: { id: materialId },
      data: {
        stock: { increment: quantity },
        costPerUnit: pricePerUnit
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
