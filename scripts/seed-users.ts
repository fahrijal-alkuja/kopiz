import prisma from '../server/utils/db'
import bcrypt from 'bcrypt'

async function main() {
  console.log('🌱 Seeding Users...')

  const saltRounds = 10
  const defaultPin = '123456'
  const hashedPin = await bcrypt.hash(defaultPin, saltRounds)

  try {
    // Check if owner exists
    const existingOwner = await prisma.user.findFirst({
      where: { role: 'OWNER' }
    })

    if (existingOwner) {
      console.log(`ℹ️  Owner already exists (ID: ${existingOwner.id}). Skipping creation.`)
    } else {
      // Create new owner
      const newOwner = await prisma.user.create({
        data: {
          name: 'Owner',
          pin: hashedPin,
          role: 'OWNER'
        }
      })
      console.log(`✅ User Owner created!`)
      console.log(`   PIN: ${defaultPin}`)
      console.log(`   ID:  ${newOwner.id}`)
    }

  } catch (error) {
    console.error('❌ Error seeding users:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
