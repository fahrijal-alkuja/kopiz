import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    const filters = getQuery(event)
    const items = await prisma.menuItem.findMany({
      include: { material: true },
      orderBy: { name: 'asc' }
    })
    return items
  }

  if (method === 'POST') {
    const body = await readBody(event)
    try {
      const newItem = await prisma.menuItem.create({
        data: {
          name: body.name,
          category: body.category || 'Minuman',
          price: parseFloat(body.price),
          isRetail: body.isRetail || false,
          materialId: body.materialId ? parseInt(body.materialId) : null
        }
      })
      return newItem
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw createError({ statusCode: 400, statusMessage: 'Menu item already exists' })
      }
      throw e
    }
  }
})
