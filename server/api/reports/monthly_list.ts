import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const month = query.month ? new Date(query.month as string) : new Date()
  
  const startOfMonth = new Date(month.getFullYear(), month.getMonth(), 1)
  const endOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0)
  endOfMonth.setHours(23, 59, 59, 999)

  const sales = await prisma.sale.findMany({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth
      }
    },
    orderBy: { date: 'asc' }
  })

  // Aggregate by Date
  const dailyStats: Record<string, { date: string, count: number, total: number, uniqueTrx: Set<string> }> = {}

  for (const rawSale of sales) {
    const sale = rawSale as any // Type cast to access transactionId if needed
    const dateKey = sale.date.toISOString().split('T')[0]
    
    if (!dailyStats[dateKey]) {
      dailyStats[dateKey] = {
        date: dateKey,
        count: 0, // Item count
        total: 0,
        uniqueTrx: new Set()
      }
    }
    
    dailyStats[dateKey].count += sale.qty
    dailyStats[dateKey].total += sale.total
    
    if (sale.transactionId) {
      dailyStats[dateKey].uniqueTrx.add(sale.transactionId)
    } else {
      dailyStats[dateKey].uniqueTrx.add(`single-${sale.id}`)
    }
  }

  // Convert to array
  const report = Object.values(dailyStats).map(day => ({
    date: day.date,
    itemCount: day.count,
    transactionCount: day.uniqueTrx.size,
    total: day.total
  }))

  return {
    month: month.toISOString().slice(0, 7),
    report
  }
})
