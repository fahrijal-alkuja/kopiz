import prisma from '../../utils/db'

export default defineEventHandler(async (event) => {
  const menuItems = await (prisma as any).menuItem.findMany({
    include: {
      material: true,
      recipes: {
        include: {
          material: true
        }
      }
    }
  })

  const margins = menuItems.map((item: any) => {
    let hpp = 0
    
    if (item.isRetail && item.material) {
      hpp = item.material.costPerUnit || 0
    } else {
      hpp = item.recipes.reduce((sum: number, r: any) => {
        return sum + (r.quantity * (r.material?.costPerUnit || 0))
      }, 0)
    }

    return {
      id: item.id,
      name: item.name,
      price: item.price,
      hpp: Math.round(hpp),
      margin: item.price - Math.round(hpp),
      marginPercent: item.price > 0 ? parseFloat(((item.price - Math.round(hpp)) / item.price * 100).toFixed(0)) : 0
    }
  })

  return margins
})
