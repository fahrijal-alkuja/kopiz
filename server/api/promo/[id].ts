import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const id = parseInt(event.context.params?.id || '0')

  if (method === 'DELETE') {
    await prisma.promo.delete({ where: { id } })
    return { success: true }
  }
})
