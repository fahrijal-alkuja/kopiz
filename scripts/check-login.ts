import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

const { PrismaClient } = require('../server/generated/prisma');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Checking Owner login...');
  
  // 1. Get User
  const user = await prisma.user.findFirst({
    where: { name: 'Owner' }
  });

  if (!user) {
    console.log('❌ User "Owner" not found!');
    return;
  }

  console.log(`Found User: ${user.name} (ID: ${user.id})`);
  console.log(`Stored PIN Hash: ${user.pin}`);
  
  // 2. Test Compare
  const inputPin = '1234';
  const isMatch = await bcrypt.compare(inputPin, user.pin);
  
  console.log(`Testing PIN "${inputPin}" match: ${isMatch ? '✅ MATCH' : '❌ FAIL'}`);

  if (!isMatch) {
     console.log('Re-hashing...');
     const newHash = await bcrypt.hash(inputPin, 10);
     console.log(`New Hash should be: ${newHash}`);
     
     // Update to strictly correct hash
     await prisma.user.update({
         where: { id: user.id },
         data: { pin: newHash }
     });
     console.log('✅ Updated stored PIN to new hash. Try logging in again.');
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
