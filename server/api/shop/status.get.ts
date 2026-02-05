
import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const activeShift = await prisma.shift.findFirst({
    where: { status: 'OPEN' },
    orderBy: { createdAt: 'desc' }
  })

  return {
    isOpen: !!activeShift,
    shiftId: activeShift?.id || null,
    message: activeShift ? 'Kami Buka!' : 'Maaf, Kedai Sedang Tutup.'
  }
})
