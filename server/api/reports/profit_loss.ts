import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  // Check auth - Only Owner
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const query = getQuery(event)
  const type = query.type as string || 'monthly' // 'daily' or 'monthly'
  const dateStr = query.date as string || new Date().toISOString()

  let startDate, endDate

  if (type === 'daily') {
    startDate = new Date(dateStr)
    startDate.setHours(0, 0, 0, 0)
    endDate = new Date(dateStr)
    endDate.setHours(23, 59, 59, 999)
  } else {
    // Monthly
    const d = new Date(dateStr) // expecting YYYY-MM
    startDate = new Date(d.getFullYear(), d.getMonth(), 1)
    endDate = new Date(d.getFullYear(), d.getMonth() + 1, 0)
    endDate.setHours(23, 59, 59, 999)
  }

  // 1. Fetch Sales
  const sales = await prisma.sale.findMany({
    where: {
      date: { gte: startDate, lte: endDate }
    },
    include: {
      menuItem: {
        include: {
          recipes: {
            include: { material: true }
          }
        }
      }
    }
  })

  // 2. Fetch Expenses
  const expenses = await prisma.expense.findMany({
    where: {
      date: { gte: startDate, lte: endDate }
    }
  })

  // 3. Calculate Financials
  let grossSales = 0
  let cogs = 0
  let totalOpsExpense = 0
  let totalHppShopping = 0

  // Revenue & HPP (Usage based)
  for (const sale of sales) {
    grossSales += sale.total
    
    // Explicitly use the snapshot if available, otherwise fall back to current recipe
    const saleCost = (sale as any).costSnapshot || 0
    
    if (saleCost > 0) {
      cogs += (saleCost * sale.qty)
    } else if (sale.menuItem && (sale.menuItem as any).recipes) {
      for (const recipe of (sale.menuItem as any).recipes as any[]) {
        cogs += recipe.quantity * recipe.material.costPerUnit * sale.qty
      }
    }
  }

  // Expenses (Cash out)
  for (const expense of expenses) {
    if (expense.category === 'HPP') {
      totalHppShopping += expense.amount
    } else {
      totalOpsExpense += expense.amount
    }
  }

  const grossProfit = grossSales - cogs
  const netProfit = grossProfit - totalOpsExpense

  return {
    period: type === 'daily' ? startDate.toLocaleDateString('id-ID') : startDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
    grossSales,
    cogs,
    grossProfit,
    expenseTotal: totalOpsExpense, // Return OPS as main expense
    totalHppShopping, // Return HPP for info
    netProfit,
    expenseDetails: expenses.map(e => ({
      description: e.description,
      amount: e.amount,
      category: e.category,
      date: e.date
    })),
    transactionCount: sales.length
  }
})
