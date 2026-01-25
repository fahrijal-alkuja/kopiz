import prisma from '../../utils/db'
import { loginSchema } from '../../utils/schemas'
import { generateAccessToken, generateRefreshToken } from '../../utils/jwt'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validate input
  const validation = loginSchema.safeParse(body)
  if (!validation.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Input tidak valid',
      data: validation.error.issues
    })
  }

  const { pin } = validation.data

  // Find all users (since we don't have username/role in login)
  // In a larger app, we'd require a user ID or username.
  const users = await prisma.user.findMany()
  
  let validUser = null
  
  for (const user of users) {
    let isMatch = false
    try {
      isMatch = await bcrypt.compare(pin, user.pin)
    } catch (e) {
      // Ignore bcrypt errors
    }

    if (isMatch) {
      validUser = user
      break
    }
  }

  if (!validUser) {
    throw createError({
      statusCode: 401,
      statusMessage: 'PIN Salah'
    })
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

  return {
    accessToken,
    user: {
      id: validUser.id,
      name: validUser.name,
      role: validUser.role
    }
  }
})
