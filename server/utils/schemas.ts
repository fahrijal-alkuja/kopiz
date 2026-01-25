import { z } from 'zod'

export const createSaleSchema = z.object({
  menuItemId: z.coerce.number().optional(),
  qty: z.coerce.number().min(1).optional(),
  items: z.array(z.object({
    menuItemId: z.coerce.number(),
    qty: z.coerce.number().min(1)
  })).optional(),
  paymentMethod: z.string(),
  isTakeaway: z.boolean().optional(),
  promoId: z.coerce.number().optional(),
  discountAmount: z.coerce.number().optional()
})

export const updateSaleSchema = z.object({
  id: z.coerce.number(),
  menuItemId: z.coerce.number(),
  qty: z.coerce.number().min(1),
  paymentMethod: z.string()
})

export const loginSchema = z.object({
  pin: z.string().min(1, 'PIN is required')
})

export const createUserSchema = z.object({
  name: z.string().min(1, 'Nama lengkap wajib diisi'),
  pin: z.string().min(4, 'PIN minimal 4 angka'),
  role: z.enum(['OWNER', 'BARISTA']).default('BARISTA')
})

export const updateUserSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(1, 'Nama lengkap wajib diisi').optional(),
  pin: z.string().min(4, 'PIN minimal 4 angka').optional(),
  role: z.enum(['OWNER', 'BARISTA']).optional()
})
