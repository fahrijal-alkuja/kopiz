import prisma from '../../utils/db'
import { createUserSchema, updateUserSchema } from '../../utils/schemas'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  // Check auth - Only Owner
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const method = event.method

  if (method === 'GET') {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        role: true,
        createdAt: true
      },
      orderBy: { name: 'asc' }
    })
    return users
  }

  if (method === 'POST') {
    const body = await readBody(event)
    const validation = createUserSchema.safeParse(body)
    if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Data tidak valid', data: validation.error.issues })
    }

    const { name, pin, role } = validation.data
    const hashedPin = await bcrypt.hash(pin, 10)

    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          pin: hashedPin,
          role
        }
      })
      return { id: newUser.id, name: newUser.name, role: newUser.role }
    } catch (e) {
      throw createError({ statusCode: 500, statusMessage: 'Gagal menambahkan user' })
    }
  }

  if (method === 'PUT') {
    const body = await readBody(event)
    const validation = updateUserSchema.safeParse(body)
    if (!validation.success) {
      throw createError({ statusCode: 400, statusMessage: 'Data tidak valid', data: validation.error.issues })
    }

    const { id, name, pin, role } = validation.data
    const updateData: any = { name, role }

    if (pin) {
      updateData.pin = await bcrypt.hash(pin, 10)
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: updateData
      })
      return { id: updatedUser.id, name: updatedUser.name, role: updatedUser.role }
    } catch (e) {
      throw createError({ statusCode: 500, statusMessage: 'Gagal memperbarui user' })
    }
  }

  if (method === 'DELETE') {
    const query = getQuery(event)
    const id = parseInt(query.id as string)

    if (!id) {
      throw createError({ statusCode: 400, statusMessage: 'ID user diperlukan' })
    }

    // Prevent deleting self
    if (id === user.id) {
      throw createError({ statusCode: 400, statusMessage: 'Tidak bisa menghapus akun sendiri' })
    }

    try {
      await prisma.user.delete({ where: { id } })
      return { success: true }
    } catch (e) {
      throw createError({ statusCode: 500, statusMessage: 'Gagal menghapus user' })
    }
  }
})
