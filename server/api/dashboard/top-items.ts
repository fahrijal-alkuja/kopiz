import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  // Check auth
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const query = getQuery(event)
  const limit = parseInt(query.limit as string) || 5

  // Start of this month for checking trends, or all time? Let's do all time for now or last 30 days.
  // Using last 30 days for relevance.
  const date = new Date()
  date.setDate(date.getDate() - 30)

  const topItems = await prisma.sale.groupBy({
    by: ['menuItemId'],
    _sum: {
      qty: true,
      total: true
    },
    where: {
      date: {
        gte: date
      }
    },
    orderBy: {
      _sum: {
        qty: 'desc'
      }
    },
    take: limit
  })

  // Enrich with Item Names
  const enrichedItems = await Promise.all(topItems.map(async (item) => {
    const menu = await prisma.menuItem.findUnique({
      where: { id: item.menuItemId }
    })
    return {
      name: menu?.name || 'Unknown',
      qty: item._sum.qty,
      total: item._sum.total
    }
  }))

  return enrichedItems
})
