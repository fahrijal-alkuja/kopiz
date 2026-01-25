import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const query = getQuery(event)

  if (method === 'GET') {
    const dateStr = typeof query.date === 'string' ? query.date : undefined
    let where = {}

    if (dateStr) {
      const startOfDay = new Date(dateStr)
      startOfDay.setHours(0, 0, 0, 0)
      const endOfDay = new Date(dateStr)
      endOfDay.setHours(23, 59, 59, 999)
      
      where = {
        date: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    }

    const expenses = await prisma.expense.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
    return expenses
  }

  if (method === 'POST') {
    const body = await readBody(event)
    // body: { description, category, amount, note }
    
    const expense = await prisma.expense.create({
      data: {
        description: body.description,
        category: body.category, // 'HPP' | 'OPS'
        amount: parseFloat(body.amount),
        note: body.note,
        date: new Date()
      }
    })
    return expense
  }
})
