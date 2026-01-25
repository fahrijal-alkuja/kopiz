import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id as string)

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID required' })
  }

  const method = event.method

  if (method === 'PUT') {
    const body = await readBody(event)
    const updated = await prisma.menuItem.update({
      where: { id },
      data: {
        name: body.name,
        category: body.category,
        price: parseFloat(body.price),
        isRetail: body.isRetail,
        materialId: body.materialId ? parseInt(body.materialId) : null
      }
    })
    return updated
  }

  if (method === 'DELETE') {
    await prisma.menuItem.delete({
      where: { id }
    })
    return { success: true }
  }
})
