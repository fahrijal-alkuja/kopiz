import prisma from '../../../utils/db'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '0')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
  
  const user = event.context.user
  if (user?.role !== 'OWNER' && user?.role !== 'ADMIN') {
      throw createError({ statusCode: 403, statusMessage: 'Hanya Owner/Admin yang dapat melakukan pengundian.' })
  }

  const raffle = await prisma.raffle.findUnique({
    where: { id }
  })

  if (!raffle) throw createError({ statusCode: 404, statusMessage: 'Raffle not found' })
  if (raffle.status !== 'ACTIVE') throw createError({ statusCode: 400, statusMessage: 'Raffle is not active' })

  // Fix End Date to be End of Day
  const startDate = new Date(raffle.startDate)
  const endDate = new Date(raffle.endDate)
  endDate.setHours(23, 59, 59, 999)

  // 1. Find eligible orders
  const eligibleOrders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate
      },
      totalAmount: {
        gte: raffle.minimumSpend
      },
      status: 'COMPLETED' // Only completed orders
    },
    select: {
      transactionId: true,
      customerName: true,
      createdAt: true
    }
  })

  if (eligibleOrders.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No eligible transactions found for this period.' })
  }

  // 2. Randomly pick one
  const randomIndex = Math.floor(Math.random() * eligibleOrders.length)
  const winnerOrder = eligibleOrders[randomIndex]
  if (!winnerOrder) throw createError({ statusCode: 500, statusMessage: 'Internal Error: Selection failed' })

  // 3. Save Winner
  const winner = await prisma.raffleWinner.create({
    data: {
      raffleId: raffle.id,
      transactionId: winnerOrder.transactionId,
      customerName: winnerOrder.customerName || 'Guest',
      prize: 'TBD', // To be updated by admin later or passed in body? checking requirements. 
      // Plan didn't specify prize in draw logic, but usually we just pick winner.
    }
  })

  // 4. Update Raffle Status to DRAWN or keep ACTIVE for multiple draws? 
  // User asked "Usually how many winners? 1 or more?"
  // If we close it, we can't draw again.
  // Better to keep it active or have a specific "Close" action?
  // Use case: Monthly draw. Usually one draw.
  // Let's set it to DRAWN for now.
  
  await prisma.raffle.update({
    where: { id },
    data: { 
        status: 'DRAWN',
        drawDate: new Date() // Set actual draw date
    }
  })

  return { success: true, winner }
})
