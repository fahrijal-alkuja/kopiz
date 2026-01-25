// Migration script to hash existing PINs in database
// Run this ONCE before switching to the new authentication system

import prisma from '../server/utils/db'
import bcrypt from 'bcrypt'

async function migratePins() {
  console.log('🔄 Starting PIN migration...')
  
  try {
    const users = await (prisma as any).user.findMany()
    console.log(`Found ${users.length} users to migrate`)

    for (const user of users) {
      // Check if PIN is already hashed (bcrypt hashes start with $2b$)
      if (user.pin.startsWith('$2b$')) {
        console.log(`✓ ${user.name} already has hashed PIN, skipping`)
        continue
      }

      // Hash the plaintext PIN
      const hashedPin = await bcrypt.hash(user.pin, 10)
      
      await (prisma as any).user.update({
        where: { id: user.id },
        data: { pin: hashedPin }
      })
      
      console.log(`✓ Migrated PIN for ${user.name}`)
    }

    console.log('✅ Migration completed successfully!')
    console.log('⚠️ NOTE: All users should use their original PINs to login')
    
  } catch (error: any) {
    console.error('❌ Migration failed:', error.message)
    process.exit(1)
  } finally {
    await (prisma as any).$disconnect()
  }
}

// Run migration
migratePins()
