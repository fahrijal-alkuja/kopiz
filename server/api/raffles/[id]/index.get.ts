import prisma from '../../../utils/db'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '0')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })

  const raffle = await prisma.raffle.findUnique({
    where: { id },
    include: {
      winners: true
    }
  })

  if (!raffle) throw createError({ statusCode: 404, statusMessage: 'Raffle not found' })

  return raffle
})
