import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const materials = await prisma.material.findMany()
  
  // Filter for low stock
  const lowStock = materials.filter(m => m.stock <= m.minStock)
  
  return lowStock.map(m => ({
    id: m.id,
    name: m.name,
    stock: m.stock,
    unit: m.unit,
    minStock: m.minStock
  }))
})
