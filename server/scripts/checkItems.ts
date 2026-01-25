import prisma from '../utils/db'

async function checkItems() {
  const items = await prisma.menuItem.findMany()
  console.log('Existing Items:', items.map((i: any) => i.name))
}

checkItems()
