import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    const filters = getQuery(event)
    
    // 1. Get Top Selling items (Last 30 Days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const topSales = await prisma.sale.groupBy({
        by: ['menuItemId'],
        _sum: {
            qty: true
        },
        where: {
            date: {
                gte: thirtyDaysAgo
            }
        },
        orderBy: {
            _sum: {
                qty: 'desc'
            }
        },
        take: 5
    })
    
    const bestSellerIds = new Set(topSales.map(s => s.menuItemId))

    // 2. Fetch Menu Items
    const items = await prisma.menuItem.findMany({
      include: { material: true },
      orderBy: { name: 'asc' }
    })
    
    // 3. Inject isBestSeller flag
    const result = items.map(item => ({
        ...item,
        isBestSeller: bestSellerIds.has(item.id)
    }))

    return result
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
