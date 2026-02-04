import prisma from '../../utils/db'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  const schema = z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    period: z.enum(['daily', 'monthly']).optional().default('daily')
  })

  const validation = schema.safeParse(query)
  if (!validation.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid parameters' })
  }

  const { startDate, endDate, period } = validation.data
  
  const where: any = {}
  if (startDate && endDate) {
    where.date = {
      gte: new Date(startDate),
      lte: new Date(endDate)
    }
  }

  // 1. Get raw sales data
  const sales = await prisma.sale.findMany({
    where,
    select: {
      date: true,
      total: true,
      costSnapshot: true,
      qty: true
    },
    orderBy: { date: 'asc' }
  })

  // 2. Aggregate data logic (JS aggregation for flexibility)
  const aggregated = sales.reduce((acc, sale) => {
    const d = new Date(sale.date)
    // Create key based on period
    let key: string
    if (period === 'monthly') {
      key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    } else {
      key = d.toISOString().substring(0, 10)
    }

    if (!acc[key]) {
      acc[key] = {
        date: key,
        revenue: 0,
        cost: 0,
        profit: 0,
        qty: 0
      }
    }

    acc[key].revenue += sale.total
    acc[key].cost += sale.costSnapshot
    acc[key].profit += (sale.total - sale.costSnapshot)
    acc[key].qty += sale.qty
    
    return acc
  }, {} as Record<string, any>)

  // 3. Transform to array and calculate summary
  const chartData = Object.values(aggregated).sort((a: any, b: any) => a.date.localeCompare(b.date))
  
  const summary = {
    totalRevenue: chartData.reduce((sum: number, i: any) => sum + i.revenue, 0),
    totalCost: chartData.reduce((sum: number, i: any) => sum + i.cost, 0),
    totalProfit: chartData.reduce((sum: number, i: any) => sum + i.profit, 0),
    totalQty: chartData.reduce((sum: number, i: any) => sum + i.qty, 0)
  }

  return { summary, chartData }
})
