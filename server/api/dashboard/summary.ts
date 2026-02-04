import prisma from '../../utils/db'
import { getInventoryForecast } from '../../utils/inventory'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const queryDate = query.date
  const dateStr = typeof queryDate === 'string' ? queryDate : new Date().toISOString().split('T')[0]
  
  const targetDate = new Date(dateStr as string)
  const targetMonth = targetDate.getMonth()
  const targetYear = targetDate.getFullYear()

  // Helper to get start/end of day
  const startOfDay = new Date(targetDate)
  startOfDay.setHours(0, 0, 0, 0)
  const endOfDay = new Date(targetDate)
  endOfDay.setHours(23, 59, 59, 999)

  // Helper to get start/end of month
  const startOfMonth = new Date(targetYear, targetMonth, 1)
  const endOfMonth = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59, 999)

  // --- DAILY STATS ---
  const dailySales = await prisma.sale.findMany({
    where: { date: { gte: startOfDay, lte: endOfDay } }
  })

  const dailyExpenses = await prisma.expense.findMany({
    where: { date: { gte: startOfDay, lte: endOfDay } }
  })

  const dailyOmset = dailySales.reduce((sum, s) => sum + s.total, 0)
  const dailyCash = dailySales.filter(s => s.paymentMethod === 'Cash').reduce((sum, s) => sum + s.total, 0)
  const dailyQris = dailySales.filter(s => s.paymentMethod === 'QRIS').reduce((sum, s) => sum + s.total, 0)
  
  const dailyHpp = dailySales.reduce((sum, s) => sum + s.costSnapshot, 0)
  const dailyOps = dailyExpenses.filter(e => e.category === 'OPS').reduce((sum, e) => sum + e.amount, 0)
  const dailyDiscount = dailySales.reduce((sum, s) => sum + (s.discountAmount || 0), 0)
  const dailyGrossProfit = dailyOmset - dailyHpp
  const dailyNetProfit = dailyGrossProfit - dailyOps


  // --- MONTHLY STATS ---
  const monthlySales = await prisma.sale.findMany({
    where: { date: { gte: startOfMonth, lte: endOfMonth } }
  })

  const monthlyExpenses = await prisma.expense.findMany({
    where: { date: { gte: startOfMonth, lte: endOfMonth } }
  })

  const monthlyOmset = monthlySales.reduce((sum, s) => sum + s.total, 0)
  const monthlyHpp = monthlySales.reduce((sum, s) => sum + s.costSnapshot, 0)
  const monthlyOps = monthlyExpenses.filter(e => e.category === 'OPS').reduce((sum, e) => sum + e.amount, 0)
  const monthlyDiscount = monthlySales.reduce((sum, s) => sum + (s.discountAmount || 0), 0)
  const monthlyNetProfit = monthlyOmset - (monthlyHpp + monthlyOps)

  // Group by day for charts (simple version)
  const dailyBreakdown = new Array(endOfMonth.getDate()).fill(0).map((_, i) => ({
    day: i + 1,
    omset: 0
  }))

  monthlySales.forEach(s => {
    const d = s.date.getDate()
    const dayStat = dailyBreakdown[d-1]
    if (dayStat) {
      dayStat.omset += s.total
    }
  })

  // --- ALERTS & SHIFTS ---
  // --- ALERTS & SHIFTS ---
  const forecast = await getInventoryForecast()
  const lowStock = forecast.filter((m: any) => m.stock <= m.minStock || m.daysRemaining <= 3)

  const activeShift = await (prisma as any).shift.findFirst({
    where: { status: 'OPEN' }
  })

  // --- TOP SELLING ITEMS (Monthly) ---
  const topItemsRaw = await (prisma as any).sale.groupBy({
    by: ['menuItemId'],
    _sum: { qty: true },
    where: { date: { gte: startOfMonth, lte: endOfMonth } },
    orderBy: { _sum: { qty: 'desc' } },
    take: 5
  })

  // Fetch names for top items
  const topItems = await Promise.all(topItemsRaw.map(async (t: any) => {
    const item = await (prisma as any).menuItem.findUnique({ where: { id: t.menuItemId } })
    const itemSales = await (prisma as any).sale.findMany({
      where: { menuItemId: t.menuItemId, date: { gte: startOfMonth, lte: endOfMonth } },
      select: { total: true, costSnapshot: true, qty: true }
    })
    
    const revenue = itemSales.reduce((sum: number, s: any) => sum + s.total, 0)
    const cost = itemSales.reduce((sum: number, s: any) => sum + (s.costSnapshot * s.qty), 0)
    const profit = revenue - cost

    return { 
      name: item?.name || 'Unknown', 
      qty: t._sum.qty,
      revenue,
      profit,
      margin: revenue > 0 ? (profit / revenue) * 100 : 0
    }
  }))

  return {
    date: dateStr,
    lowStock,
    activeShift,
    topItems,
    daily: {
      omset: dailyOmset,
      cash: dailyCash,
      qris: dailyQris,
      expenseHpp: dailyHpp,
      expenseOps: dailyOps,
      discount: dailyDiscount,
      grossProfit: dailyGrossProfit,
      netProfit: dailyNetProfit,
      transactionCount: dailySales.length
    },
    monthly: {
      omset: monthlyOmset,
      expenseHpp: monthlyHpp,
      expenseOps: monthlyOps,
      discount: monthlyDiscount,
      grossProfit: monthlyOmset - monthlyHpp,
      netProfit: monthlyNetProfit,
      transactionCount: monthlySales.length,
      chartData: dailyBreakdown
    }
  }
})
