import prisma from './db'

export const getInventoryForecast = async () => {
  const materials = await prisma.material.findMany()

  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

  // Fetch usage logs explicitly (type='OUT')
  // We could aggregate using groupBy but let's iterate for clarity with small data
  // Or utilize prisma groupBy for performance
  const usageStats = await prisma.materialLog.groupBy({
    by: ['materialId'],
    where: {
      type: 'OUT',
      createdAt: { gte: thirtyDaysAgo }
    },
    _sum: {
      quantity: true
    }
  })

  const forecast = materials.map(m => {
    const stat = usageStats.find(s => s.materialId === m.id)
    const totalUsage30Days = stat?._sum.quantity || 0
    const avgDailyUsage = totalUsage30Days / 30
    
    let daysRemaining = 999
    if (avgDailyUsage > 0) {
      daysRemaining = Math.floor(m.stock / avgDailyUsage)
    }

    return {
      ...m,
      avgDailyUsage,
      daysRemaining
    }
  })

  // Sort by risk (lowest days remaining first)
  return forecast.sort((a, b) => a.daysRemaining - b.daysRemaining)
}
