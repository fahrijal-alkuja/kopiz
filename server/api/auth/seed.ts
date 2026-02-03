import prisma from '../../utils/db'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  if (process.env.NODE_ENV === 'production') {
    throw createError({
      statusCode: 404, // Hide existence or 403 Forbidden
      statusMessage: 'Not Found'
    })
  }

  try {
    const saltRounds = 10
    const defaultPin = '123456'
    const hashedPin = await bcrypt.hash(defaultPin, saltRounds)

    // Check if owner exists, if not create one
    const existingOwner = await prisma.user.findFirst({
      where: { role: 'OWNER' }
    })

    if (existingOwner) {
      // Update existing owner's PIN
      await prisma.user.update({
        where: { id: existingOwner.id },
        data: {
          pin: hashedPin
        }
      })
      return { message: `User Owner updated with PIN: ${defaultPin}` }
    } else {
      // Create new owner
      await prisma.user.create({
        data: {
          name: 'Owner',
          pin: hashedPin,
          role: 'OWNER'
        }
      })
      return { message: `User Owner created with PIN: ${defaultPin}` }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to seed database',
      cause: error
    })
  }
})
