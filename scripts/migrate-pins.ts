import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

const { PrismaClient } = require('../server/generated/prisma');
const bcrypt = require('bcrypt');

const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL is not set via .env');
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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
