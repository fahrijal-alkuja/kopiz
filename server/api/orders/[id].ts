import prisma from '../../utils/db'
import { z } from 'zod'

const updateStatusSchema = z.object({
  status: z.enum(['PENDING', 'PROCESS', 'READY', 'COMPLETED', 'CANCELLED'])
})

export default defineEventHandler(async (event) => {
  const method = event.method
  const id = getRouterParam(event, 'id')
  
  if (!id) throw createError({ statusCode: 400, statusMessage: 'ID Required' })

  if (method === 'PUT') {
    const body = await readBody(event)
    const result = updateStatusSchema.safeParse(body)
    
    if (!result.success) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid status' })
    }

    const order = await prisma.order.update({
      where: { id: parseInt(id) },
      data: { status: result.data.status }
    })

    return { success: true, order }
  }
})
