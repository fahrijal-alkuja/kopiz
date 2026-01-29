import prisma from '../../../utils/db'
import { z } from 'zod'
import { logActivity } from '../../../utils/logger'

const payOrderSchema = z.object({
  paymentMethod: z.string(), // Cash, QRIS
  amountPaid: z.number().optional() // Useful for cash change calculation logs, though not strictly stored in Order
})

export default defineEventHandler(async (event) => {
  const idParam = event.context.params?.id
  if (!idParam) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })
  
  const id = parseInt(idParam)
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })

  const body = await readBody(event)
  const validation = payOrderSchema.safeParse(body)
   if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Data tidak valid', data: validation.error.issues })
    }
  const { paymentMethod } = validation.data

  // 1. Get Order
  const order = await prisma.order.findUnique({
    where: { id },
    include: { sales: true }
  })

  if (!order) throw createError({ statusCode: 404, statusMessage: 'Order not found' })
  if (order.status === 'COMPLETED' || order.paymentMethod !== 'PAY_LATER') {
     throw createError({ statusCode: 400, statusMessage: 'Order already paid or invalid state' })
  }

  // 2. Update Order & Sales
  const result = await prisma.$transaction(async (tx: any) => {
    // Update Order
    const updatedOrder = await tx.order.update({
      where: { id },
      data: {
        paymentMethod: paymentMethod,
        status: order.status === 'PENDING' ? 'PROCESS' : order.status, // Auto move to process if pending? Or keep status independent? Let's keep status independent or maybe logic says paying means 'COMPLETED' transaction? 
        // Logic: Payment doesn't mean food is ready. But usually final payment closes transaction.
        // Let's just update payment info.
        updatedAt: new Date()
      }
    })

    // Update Sales Payment Method (for reports)
    await tx.sale.updateMany({
      where: { orderId: id },
      data: { paymentMethod: paymentMethod }
    })

    return updatedOrder
  })
    
  // 3. Log
  const user = event.context.user
  if (user && user.userId) {
    await logActivity(user.userId, 'UPDATE', 'ORDER', order.transactionId, `Paid Order #${order.id} with ${paymentMethod}`)
  }

  return { success: true, order: result }
})
