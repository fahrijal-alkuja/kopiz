import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const user = event.context.user

  if (method === 'GET') {
    return await (prisma as any).material.findMany({
      orderBy: { name: 'asc' }
    })
  }

  // --- Protected Methods (OWNER ONLY) ---
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const result = await prisma.$transaction(async (tx: any) => {
      const material = await tx.material.create({
        data: {
          name: body.name,
          unit: body.unit,
          stock: parseFloat(body.stock || 0),
          minStock: parseFloat(body.minStock || 100),
          costPerUnit: parseFloat(body.costPerUnit || 0)
        }
      })

      if (material.stock > 0) {
        await (tx as any).materialLog.create({
          data: {
            materialId: material.id,
            type: 'IN',
            quantity: material.stock,
            balanceAfter: material.stock,
            reason: 'Stok Awal / Tambah Material Baru'
          }
        })

        // Create Expense Record for initial stock
        await tx.expense.create({
          data: {
            description: `Modal Awal: ${material.name} (${material.stock} ${material.unit})`,
            category: 'HPP',
            amount: material.stock * (parseFloat(body.costPerUnit) || 0),
            note: 'Otomatis saat pendaftaran bahan baru.',
            date: new Date()
          }
        })
      }
      return material
    })
    return result
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    console.log('[API] PUT Inventory starting:', body)
    
    const result = await prisma.$transaction(async (tx: any) => {
      const materialId = Number(body.id)
      const oldMaterial = await tx.material.findUnique({ where: { id: materialId } })
      if (!oldMaterial) throw createError({ statusCode: 404, statusMessage: 'Material not found' })

      const newStock = Number(body.stock)
      const diff = newStock - oldMaterial.stock

      console.log('[API] Update data:', { id: materialId, stock: newStock, diff })

      const updatedMaterial = await tx.material.update({
        where: { id: materialId },
        data: {
          name: body.name,
          unit: body.unit,
          stock: newStock,
          minStock: Number(body.minStock || 100),
          costPerUnit: Number(body.costPerUnit || 0)
        }
      })

      if (diff !== 0) {
        await (tx as any).materialLog.create({
          data: {
            materialId: updatedMaterial.id,
            type: diff > 0 ? 'IN' : 'OUT',
            quantity: Math.abs(diff),
            balanceAfter: updatedMaterial.stock,
            reason: 'Koreksi Stok Manual'
          }
        })
      }

      return updatedMaterial
    })
    console.log('[API] PUT Inventory success')
    return result
  }

  if (method === 'DELETE') {
    const body = await readBody(event)
    const result = await prisma.$transaction(async (tx: any) => {
      // 1. Delete associated logs first
      await tx.materialLog.deleteMany({
        where: { materialId: body.id }
      })

      // 2. Delete from any recipes (MenuItemMaterial)
      await tx.menuItemMaterial.deleteMany({
        where: { materialId: body.id }
      })

      // 3. Delete from purchase history
      await tx.materialPurchase.deleteMany({
        where: { materialId: body.id }
      })

      // 4. Delete the material
      return await tx.material.delete({
        where: { id: body.id }
      })
    })
    return result
  }
})
