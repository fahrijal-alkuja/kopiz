import prisma from '../utils/db'

const data = [
  { date: '2026-01-23', name: 'Kopiz', qty: 2, price: 20000, total: 40000, method: 'Cash' },
  { date: '2026-01-23', name: 'Caffe Latte', qty: 1, price: 22000, total: 22000, method: 'Cash' },
  { date: '2026-01-23', name: 'Original Green Tea', qty: 1, price: 10000, total: 10000, method: 'Cash' },
  { date: '2026-01-23', name: 'Emerald Latte (Green Tea)', qty: 2, price: 15000, total: 30000, method: 'Cash' },
  { date: '2026-01-23', name: 'Original Red Tea', qty: 1, price: 8000, total: 8000, method: 'Cash' },
  { date: '2026-01-23', name: 'Kopiz', qty: 3, price: 20000, total: 60000, method: 'Qris' }, // Note: Sheet "Qris" -> Schema "QRIS"? Using mixed case in DB often suggests sanitization needed.
  { date: '2026-01-23', name: 'Americano', qty: 2, price: 15000, total: 30000, method: 'Qris' }
]

async function importSales() {
  console.log('Starting import...')
  
  // 1. Find or Create Shift for the date (assuming one shift per day for simplicity or creating a "Backlog" shift)
  let shift = await prisma.shift.findFirst({
    where: { 
      status: 'CLOSED', // Or OPEN? Since it's yesterday, likely closed. Or just null shift?
      startTime: {
        gte: new Date('2026-01-23T00:00:00'),
        lte: new Date('2026-01-23T23:59:59')
      }
    }
  })

  // If no shift found, maybe just leave shiftId null or create one.
  // For safety, let's leave shiftId null unless we are sure.
  
  for (const row of data) {
    const item = await prisma.menuItem.findUnique({
      where: { name: row.name }
    })
    
    if (!item) {
      console.error(`Item not found: ${row.name}`)
      continue
    }

    await prisma.sale.create({
      data: {
        date: new Date(row.date),
        menuItemId: item.id,
        qty: row.qty,
        priceSnapshot: row.price,
        total: row.total,
        paymentMethod: row.method === 'Qris' ? 'QRIS' : 'Cash', // Normalize
        shiftId: shift?.id || null
      }
    })
    console.log(`Imported: ${row.qty}x ${row.name}`)
  }
  
  console.log('Import complete.')
}

importSales()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
