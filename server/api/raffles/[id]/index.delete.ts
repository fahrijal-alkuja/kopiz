import prisma from '../../../utils/db'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '0')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Invalid ID' })

  const user = event.context.user
  if (user?.role !== 'OWNER' && user?.role !== 'ADMIN') {
      throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  // Check if it has winners (maybe prevent delete if drawn? or allow cascade?)
  // Usually better to prevent accidental delete of historical data.
  // But user asked for delete. Let's allow it but warn in UI. 
  // Prisma relation handling: strictly speaking we should delete winners first or use onDelete: Cascade in schema.
  // Let's check schema/relation. 
  // If no cascade, we must delete winners first.
  
  // Safe approach: Transaction delete
  
  await prisma.$transaction(async (tx) => {
      // 1. Delete Winners
      await tx.raffleWinner.deleteMany({
          where: { raffleId: id }
      })
      
      // 2. Delete Raffle
      await tx.raffle.delete({
          where: { id }
      })
  })

  return { success: true }
})
