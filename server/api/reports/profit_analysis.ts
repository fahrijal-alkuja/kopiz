import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  // Check auth - Only Owner
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const query = getQuery(event)
  const month = query.month as string || new Date().toISOString().slice(0, 7) // YYYY-MM
  
  const d = new Date(month)
  const startDate = new Date(d.getFullYear(), d.getMonth(), 1)
  const endDate = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999)

  // Fetch sales for the period grouped by menuItem
  const sales = await prisma.sale.findMany({
    where: {
      date: { gte: startDate, lte: endDate }
    },
    include: {
      menuItem: true
    }
  })

  const analysis: Record<number, { 
    id: number, 
    name: string, 
    qty: number, 
    revenue: number, 
    cost: number, 
    profit: number,
    margin: number
  }> = {}

  for (const sale of sales) {
    const id = sale.menuItemId
    if (!analysis[id]) {
      analysis[id] = {
        id: sale.menuItem.id,
        name: sale.menuItem.name,
        qty: 0,
        revenue: 0,
        cost: 0,
        profit: 0,
        margin: 0
      }
    }

    const itemAnalysis = analysis[id]
    itemAnalysis.qty += sale.qty
    itemAnalysis.revenue += sale.total
    itemAnalysis.cost += (sale.costSnapshot * sale.qty)
  }

  // Calculate profit and margin
  const result = Object.values(analysis).map(item => {
    item.profit = item.revenue - item.cost
    item.margin = item.revenue > 0 ? (item.profit / item.revenue) * 100 : 0
    return item
  }).sort((a, b) => b.profit - a.profit)

  return {
    period: month,
    data: result
  }
})
