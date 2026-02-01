import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const status = query.status as string

  let where: any = {}
  if (status) {
    where.status = status
  }

  const raffles = await prisma.raffle.findMany({
    where,
    include: {
      winners: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return raffles
})
