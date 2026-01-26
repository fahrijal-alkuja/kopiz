import prisma from '../../../utils/db'

export default defineEventHandler(async (event) => {
  // Ensure user is admin (optional depending on middleware, but good practice)
  const user = event.context.user
  if (!user || user.role !== 'OWNER') { // Assuming OWNER is the admin role based on context
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const query = getQuery(event)
  const limit = query.limit ? parseInt(String(query.limit)) : 50

  const logs = await prisma.activityLog.findMany({
    take: limit,
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: { name: true, role: true }
      }
    }
  })

  return logs
})
