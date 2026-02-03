import prisma from '../../../utils/db'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, 'id')
  if (!idParam) throw createError({ statusCode: 400, statusMessage: 'Missing ID' })
  const id = parseInt(idParam)
  const body = await readBody(event)
  
  const schema = z.object({
    status: z.string() // PENDING, PROCESS, etc
  })
  
  const validation = schema.safeParse(body)
  if (!validation.success) throw createError({ statusCode: 400, statusMessage: 'Invalid Data' })
  
  // Update Order Status
  const order = await prisma.order.update({
    where: { id },
    data: { status: validation.data.status }
  })
  
  return { success: true }
})
