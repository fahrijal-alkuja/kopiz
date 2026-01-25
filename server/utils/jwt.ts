import jwt from 'jsonwebtoken'

const RUNTIME_CONFIG = useRuntimeConfig()
const envSecret = RUNTIME_CONFIG.jwtSecret || process.env.JWT_SECRET

if (process.env.NODE_ENV === 'production' && !envSecret) {
  throw new Error('JWT_SECRET environment variable is not set')
}

const SECRET = envSecret || 'fallback_secret_key_change_me'

export const generateAccessToken = (userId: number | string, role: string) => {
  return jwt.sign({ userId, role, type: 'access' }, SECRET, { expiresIn: '7d' })
}

export const generateRefreshToken = (userId: number | string, role: string) => {
  return jwt.sign({ userId, role, type: 'refresh' }, SECRET, { expiresIn: '7d' })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET) as jwt.JwtPayload
}
