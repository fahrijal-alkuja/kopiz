import prisma from '../../utils/db'
import { generateAccessToken } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  const user = event.context.user
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Tidak terautentikasi'
    })
  }

  // Get refresh token from cookie
  const refreshToken = getCookie(event, 'refresh_token')
  
  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Refresh token tidak ditemukan'
    })
  }

  try {
    // Verify refresh token (reuse verifyToken from jwt.ts)
    const { verifyToken } = await import('../../utils/jwt')
    const payload = verifyToken(refreshToken)
    
    if (payload.type !== 'refresh') {
      throw createError({
       statusCode: 401,
        statusMessage: 'Token tidak valid'
      })
    }

    // Generate new access token
    const newAccessToken = generateAccessToken(payload.userId, payload.role)

    return {
      accessToken: newAccessToken
    }
  } catch (error) {
    throw createError({
      statusCode: 401,
     statusMessage: 'Refresh token tidak valid atau sudah kedaluwarsa'
    })
  }
})
