import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const materialId = query.materialId ? parseInt(query.materialId as string) : undefined
  
  if (!materialId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'materialId is required'
    })
  }

  return await (prisma as any).materialLog.findMany({
    where: {
      materialId: materialId
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 50 // Limit to last 50 entries
  })
})
