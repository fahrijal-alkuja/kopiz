import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { materialId, quantity, reason } = body

  return await prisma.$transaction(async (tx: any) => {
    // 1. Get current material
    const material = await tx.material.findUnique({ where: { id: materialId } })
    if (!material) throw createError({ statusCode: 404, statusMessage: 'Material not found' })

    // 2. Update Material Stock
    const updatedMaterial = await tx.material.update({
      where: { id: materialId },
      data: {
        stock: { decrement: quantity }
      }
    })

    // 3. Log Movement
    await (tx as any).materialLog.create({
      data: {
        materialId,
        type: 'WASTE',
        quantity,
        balanceAfter: updatedMaterial.stock,
        reason: `Waste: ${reason || 'Tanpa Keterangan'}`,
        createdAt: new Date()
      }
    })

    // 4. Create Expense Record for Waste
    const wasteCost = quantity * material.costPerUnit
    if (wasteCost > 0) {
      await tx.expense.create({
        data: {
          description: `Waste: ${material.name} (${quantity} ${material.unit}) - ${reason || 'Tanpa Keterangan'}`,
          category: 'WASTE',
          amount: wasteCost,
          note: 'Otomatis dari pencatatan waste inventory.',
          date: new Date()
        }
      })
    }

    return { success: true }
  })
})
