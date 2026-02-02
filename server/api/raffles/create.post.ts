import prisma from '../../utils/db'
import { z } from 'zod'

const createRaffleSchema = z.object({
  name: z.string().min(3),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  minimumSpend: z.number().default(0),
  drawDate: z.coerce.date().optional()
})

export default defineEventHandler(async (event) => {
  const user = event.context.user
  if (user?.role !== 'OWNER' && user?.role !== 'ADMIN') {
      throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const body = await readBody(event)
  const result = createRaffleSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: result.error.issues
    })
  }

  const data = result.data

  const raffle = await prisma.raffle.create({
    data: {
      name: data.name,
      startDate: data.startDate,
      endDate: data.endDate,
      minimumSpend: data.minimumSpend,
      drawDate: data.drawDate || null,
      status: 'ACTIVE'
    }
  })

  return { success: true, raffle }
})
