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
      hpp: parseFloat(hpp.toFixed(2)),
      margin: parseFloat((item.price - hpp).toFixed(2)),
      marginPercent: item.price > 0 ? parseFloat(((item.price - hpp) / item.price * 100).toFixed(2)) : 0
    }
  })

  return margins
})
