import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const activeShift = await prisma.shift.findFirst({
    where: { status: 'OPEN' }
  })
  return activeShift
})
