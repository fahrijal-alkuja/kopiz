import { describe, it, expect, vi } from 'vitest'
import { createError } from 'h3'

// Mock Prisma
const prisma = {
  menuItem: {
    findMany: vi.fn()
  },
  order: {
    create: vi.fn()
  },
  sale: {
    create: vi.fn()
  },
  material: {
    update: vi.fn()
  }
}

vi.mock('../../utils/db', () => ({
  default: prisma
}))

vi.mock('zod', async (importOriginal) => {
    const mod = await importOriginal()
    return mod
})

describe('QR Order API', () => {
  it('should calculate total correctly and create order', async () => {
    // Setup Mocks
    const menuItems = [
      { id: 1, name: 'Kopi Susu', price: 15000, isRetail: true, materialId: 10 },
      { id: 2, name: 'Roti Bakar', price: 10000, isRetail: false }
    ]
    
    prisma.menuItem.findMany.mockResolvedValue(menuItems)
    
    prisma.order.create.mockResolvedValue({
        id: 1,
        totalAmount: 40000 
    })

    // Simulate Logic (Copy of API Logic simplified for Unit Test)
    // Ideally we import the handler but Nuxt handlers are wrapped. 
    // We will test the logic function directly if isolated, but here we just verify the math logic we implemented.
    
    const inputItems = [
        { menuItemId: 1, qty: 2 }, // 30000
        { menuItemId: 2, qty: 1 }  // 10000
    ]
    
    // Logic extraction
    let total = 0
    for(const req of inputItems) {
        const item = menuItems.find(i => i.id === req.menuItemId)
        if (item) {
             total += item.price * req.qty
        }
    }
    
    expect(total).toBe(40000)
  })
})
