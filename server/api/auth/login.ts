import prisma from '../../utils/db'
import { loginSchema } from '../../utils/schemas'
import { generateAccessToken, generateRefreshToken } from '../../utils/jwt'
import bcrypt from 'bcrypt'
import { logActivity } from '../../utils/logger'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validate input
  const validation = loginSchema.safeParse(body)
  if (!validation.success) {
    throw createError({ statusCode: 400, statusMessage: 'Input tidak valid' })
  }

  // Expect userId + pin now
  const { pin, userId } = validation.data as any // Cast for now, need schema update

  if (!userId) {
    throw createError({ statusCode: 400, statusMessage: 'User ID diperlukan' })
  }

  const validUser = await prisma.user.findUnique({
    where: { id: parseInt(userId) }
  })
  
  if (!validUser) {
    throw createError({ statusCode: 401, statusMessage: 'User tidak ditemukan' })
  }

  const isMatch = await bcrypt.compare(pin, validUser.pin)
  if (!isMatch) {
    throw createError({ statusCode: 401, statusMessage: 'PIN Salah' })
  }

  // Generate tokens
  const accessToken = generateAccessToken(validUser.id, validUser.role)
  const refreshToken = generateRefreshToken(validUser.id, validUser.role)

  // Set refresh token cookie
  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 // 7 days
  })

  // Log activity
  await logActivity(validUser.id, 'LOGIN', 'USER', String(validUser.id), 'User logged in')

  return {
    accessToken,
    user: {
      id: validUser.id,
      name: validUser.name,
      role: validUser.role
    }
  }
})
