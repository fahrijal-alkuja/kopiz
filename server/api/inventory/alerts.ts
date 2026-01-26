import { getInventoryForecast } from '../../utils/inventory'

export default defineEventHandler(async (event) => {
  const forecast = await getInventoryForecast()
  
  // Return items with low stock OR low days remaining (e.g. < 3 days)
  const alerts = forecast.filter(m => m.stock <= m.minStock || m.daysRemaining <= 3)
  
  return alerts.map(m => ({
    id: m.id,
    name: m.name,
    stock: m.stock,
    unit: m.unit,
    minStock: m.minStock,
    daysRemaining: m.daysRemaining,
    avgDailyUsage: m.avgDailyUsage.toFixed(2)
  }))
})
