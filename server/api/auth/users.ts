import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  // Public endpoint for login screen
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true
    },
    orderBy: { name: 'asc' }
  })
  return users
})
