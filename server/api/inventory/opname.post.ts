import prisma from '../../utils/db'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const ItemSchema = z.object({
    materialId: z.number(),
    actualQty: z.number(),
    notes: z.string().optional()
  })

  const Schema = z.object({
    items: z.array(ItemSchema)
  })

  const validation = Schema.safeParse(body)
  if (!validation.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid data' })
  }

  const { items } = validation.data

  // Process in transaction
  const result = await prisma.$transaction(async (tx) => {
    const logs = []

    for (const item of items) {
      const material = await tx.material.findUnique({ where: { id: item.materialId } })
      if (!material) continue

      const diff = item.actualQty - material.stock
      
      // Only process if there is a difference
      if (diff !== 0) {
        // Update Stock
        await tx.material.update({
          where: { id: item.materialId },
          data: { stock: item.actualQty }
        })

        // Create Loq
        const log = await tx.materialLog.create({
          data: {
            materialId: item.materialId,
            type: 'OPNAME',
            quantity: Math.abs(diff), // Magnitude of change
            balanceAfter: item.actualQty,
            reason: item.notes || `Stock Opname: ${diff > 0 ? '+' : ''}${diff} ${material.unit}`
          }
        })
        logs.push(log)
      }
    }
    return logs
  })

  return { success: true, processed: result.length }
})
