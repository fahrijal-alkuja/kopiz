import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method
  const id = parseInt(event.context.params?.id || '0')

  if (method === 'DELETE') {
    await prisma.promo.delete({ where: { id } })
    return { success: true }
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    const updatedPromo = await prisma.promo.update({
      where: { id },
      data: {
        name: body.name,
        type: body.type, // NOMINAL or PERCENT
        value: parseFloat(body.value),
        isActive: body.isActive !== undefined ? body.isActive : true
      }
    })
    return updatedPromo
  }
})
