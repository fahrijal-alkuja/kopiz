import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('Start migrating PINs...')

  const users = await prisma.user.findMany()

  for (const user of users) {
    // If PIN is not a bcrypt hash (bcrypt hashes usually start with $2b$ and are 60 chars long)
    // We assume any pin shorter than 50 chars is plain text
    if (user.pin.length < 50) {
      console.log(`Migrating PIN for user: ${user.name}`)
      
      const hashedPin = await bcrypt.hash(user.pin, 10)
      
      await prisma.user.update({
        where: { id: user.id },
        data: { pin: hashedPin }
      })
      
      console.log(`Success: PIN hashed for ${user.name}`)
    }
  }

  console.log('Migration complete.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
