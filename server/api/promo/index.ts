import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'GET') {
    return await prisma.promo.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }

  if (method === 'POST') {
    const body = await readBody(event)
    try {
      const newPromo = await prisma.promo.create({
        data: {
          name: body.name,
          type: body.type, // NOMINAL or PERCENT
          value: parseFloat(body.value),
          isActive: body.isActive !== undefined ? body.isActive : true
        }
      })
      return newPromo
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw createError({ statusCode: 400, statusMessage: 'Promo name already exists' })
      }
      throw e
    }
  }
})
