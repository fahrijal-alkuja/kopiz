import prisma from '../../utils/db'
import { z } from 'zod'

const createRaffleSchema = z.object({
  name: z.string().min(3),
  startDate: z.string().or(z.date()), // Accepts ISO string
  endDate: z.string().or(z.date()),
  minimumSpend: z.number().default(0),
  drawDate: z.string().or(z.date()).optional()
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
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      minimumSpend: data.minimumSpend,
      drawDate: data.drawDate ? new Date(data.drawDate) : null,
      status: 'ACTIVE'
    }
  })

  return { success: true, raffle }
})
