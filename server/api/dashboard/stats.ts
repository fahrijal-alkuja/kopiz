import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  // Check auth
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const now = new Date()
  const startOfDay = new Date(now)
  startOfDay.setHours(0, 0, 0, 0)
  const endOfDay = new Date(now)
  endOfDay.setHours(23, 59, 59, 999)

  // 1. Get Today's Sales
  const sales = await prisma.sale.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay
      }
    },
    include: {
      menuItem: {
        include: {
          recipes: {
            include: {
              material: true
            }
          }
        }
      }
    }
  })

  // 2. Get Today's Expenses
  const expenses = await prisma.expense.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay
      }
    }
  })

  let grossSales = 0
  let materialCost = 0
  let expenseTotal = 0

  // Calculate Sales & Material Cost
  for (const sale of sales) {
    grossSales += sale.total

    // Calculate COGS for this sale
    if (sale.menuItem && sale.menuItem.recipes) {
      for (const recipe of sale.menuItem.recipes) {
        // Cost = quantity used * cost per unit
        materialCost += recipe.quantity * recipe.material.costPerUnit * sale.qty
      }
    }
  }

  // Calculate Expenses
  for (const expense of expenses) {
    expenseTotal += expense.amount
  }

  const netProfit = grossSales - materialCost - expenseTotal

  // 3. Prepare Chart Data (Hourly Sales)
  const hourlyData = new Array(24).fill(0)
  for (const sale of sales) {
    const hour = new Date(sale.date).getHours()
    hourlyData[hour] += sale.total
  }

  return {
    summary: {
      grossSales,
      netProfit,
      transactionCount: sales.length,
      materialCost,
      expenseTotal
    },
    chart: {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      data: hourlyData
    }
  }
})
