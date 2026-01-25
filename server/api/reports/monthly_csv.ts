import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const dateStr = typeof query.date === 'string' ? query.date : new Date().toISOString().split('T')[0]
  const targetDate = new Date(dateStr as string)
  const targetMonth = targetDate.getMonth()
  const targetYear = targetDate.getFullYear()

  const startOfMonth = new Date(targetYear, targetMonth, 1)
  const endOfMonth = new Date(targetYear, targetMonth + 1, 0, 23, 59, 59)

  const sales = await (prisma as any).sale.findMany({
    where: { date: { gte: startOfMonth, lte: endOfMonth } },
    orderBy: { date: 'asc' }
  })

  // Group by day
  const dailyData: Record<string, number> = {}
  sales.forEach((s: any) => {
    const day = s.date.getDate()
    dailyData[day] = (dailyData[day] || 0) + s.total
  })

  // Create CSV String
  let csv = 'Tanggal,Omset (Rp)\n'
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    const omset = dailyData[i] || 0
    csv += `${i}/${targetMonth+1}/${targetYear},${omset}\n`
  }

  // Set headers for download
  setResponseHeaders(event, {
    'Content-Type': 'text/csv',
    'Content-Disposition': `attachment; filename="Laporan_Kopiz_${targetMonth+1}_${targetYear}.csv"`
  })

  return csv
})
