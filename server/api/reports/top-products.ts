import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const startDate = query.startDate ? new Date(query.startDate as string) : undefined
  const endDate = query.endDate ? new Date(query.endDate as string) : undefined
  const limit = query.limit ? parseInt(query.limit as string) : 10

  const where: any = {}
  if (startDate && endDate) {
    where.date = { gte: startDate, lte: endDate }
  }

  const sales = await prisma.sale.findMany({
    where,
    include: {
      menuItem: {
        select: { name: true, category: true }
      }
    }
  })

  const productStats = sales.reduce((acc: any, sale) => {
    const id = sale.menuItemId
    if (!acc[id]) {
      acc[id] = {
        id,
        name: sale.menuItem.name,
        category: sale.menuItem.category,
        totalQty: 0,
        totalRevenue: 0,
        totalCost: 0,
        totalProfit: 0
      }
    }
    
    acc[id].totalQty += sale.qty
    acc[id].totalRevenue += sale.total
    acc[id].totalCost += sale.costSnapshot
    acc[id].totalProfit += (sale.total - sale.costSnapshot)
    
    return acc
  }, {})

  const allStats = Object.values(productStats)

  const topByQty = [...allStats].sort((a: any, b: any) => b.totalQty - a.totalQty).slice(0, limit)
  const topByProfit = [...allStats].sort((a: any, b: any) => b.totalProfit - a.totalProfit).slice(0, limit)
  
  // Also find worst performing (but with at least 1 sale) - optional insight
  const worstByQty = [...allStats].sort((a: any, b: any) => a.totalQty - b.totalQty).slice(0, 5)

  return {
    topByQty,
    topByProfit,
    worstByQty
  }
})
