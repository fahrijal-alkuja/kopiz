import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    const activeShift = await (prisma as any).shift.findFirst({
      where: { status: 'OPEN' },
      include: {
        _count: { select: { sales: true } },
        sales: true,
        user: { select: { name: true } }
      }
    })

    if (!activeShift) {
      return await (prisma as any).shift.findFirst({ 
        orderBy: { createdAt: 'desc' }, 
        take: 1,
        include: { user: { select: { name: true } } }
      })
    }

    // Calculate totals for active shift
    const cashTotal = activeShift.sales.filter((s: any) => s.paymentMethod === 'Cash').reduce((sum: number, s: any) => sum + s.total, 0)
    const qrisTotal = activeShift.sales.filter((s: any) => s.paymentMethod === 'QRIS').reduce((sum: number, s: any) => sum + s.total, 0)
    const expectedCash = activeShift.openingCash + cashTotal

    return {
      ...activeShift,
      summary: {
        cashTotal,
        qrisTotal,
        expectedCash,
        totalRevenue: cashTotal + qrisTotal
      }
    }
  }

  if (method === 'POST') {
    const user = event.context.user // Get current user from context
    const body = await readBody(event)
    // body: { action, cash }
    
    if (body.action === 'OPEN') {
      // Check if already open
      const existing = await (prisma as any).shift.findFirst({
        where: { status: 'OPEN' }
      })
      if (existing) throw createError({ statusCode: 400, statusMessage: 'Shift is already open' })

      return await (prisma as any).shift.create({
        data: {
          openingCash: parseFloat(body.cash),
          status: 'OPEN',
          userId: user?.id || null // Store the user who opened the shift
        }
      })
    }

    if (body.action === 'CLOSE') {
      const active = await (prisma as any).shift.findFirst({
        where: { status: 'OPEN' }
      })
      if (!active) throw createError({ statusCode: 400, statusMessage: 'No shift to close' })

      return await (prisma as any).shift.update({
        where: { id: active.id },
        data: {
          closingCash: parseFloat(body.cash),
          status: 'CLOSED',
          endTime: new Date()
        }
      })
    }
  }
})
