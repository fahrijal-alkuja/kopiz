import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    const { menuItemId } = getQuery(event)
    if (!menuItemId) return []
    
    return await (prisma as any).menuItemMaterial.findMany({
      where: { menuItemId: parseInt(menuItemId as string) },
      include: { material: true }
    })
  }

  if (method === 'POST') {
    const body = await readBody(event)
    // body: { menuItemId, materialId, quantity }
    return await (prisma as any).menuItemMaterial.create({
      data: {
        menuItemId: parseInt(body.menuItemId),
        materialId: parseInt(body.materialId),
        quantity: parseFloat(body.quantity)
      }
    })
  }

  if (method === 'DELETE') {
    const body = await readBody(event)
    return await (prisma as any).menuItemMaterial.delete({
      where: { id: parseInt(body.id) }
    })
  }
})
