import prisma from '../../../utils/db'
import { z } from 'zod'

const updateRaffleSchema = z.object({
  name: z.string().min(3).optional(),
  startDate: z.string().or(z.date()).optional(),
  endDate: z.string().or(z.date()).optional(),
  minimumSpend: z.number().optional(),
  status: z.string().optional()
})

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '0')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })

  const user = event.context.user
  if (user?.role !== 'OWNER' && user?.role !== 'ADMIN') {
      throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const body = await readBody(event)
  const result = updateRaffleSchema.safeParse(body)

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: result.error.issues
    })
  }

  const data = result.data

  // Verify existence
  const existing = await prisma.raffle.findUnique({ where: { id } })
  if (!existing) throw createError({ statusCode: 404, statusMessage: 'Raffle not found' })

  // Transform dates if present
  const updateData: any = { ...data }
  if (data.startDate) updateData.startDate = new Date(data.startDate)
  if (data.endDate) updateData.endDate = new Date(data.endDate)

  const raffle = await prisma.raffle.update({
    where: { id },
    data: updateData
  })

  return { success: true, raffle }
})
