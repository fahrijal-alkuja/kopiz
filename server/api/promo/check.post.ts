import prisma from '../../utils/db'
import { z } from 'zod'

const checkSchema = z.object({
    code: z.string()
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const validation = checkSchema.safeParse(body)
    
    if (!validation.success) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid request' })
    }
    
    const { code } = validation.data
    
    const promo = await prisma.promo.findUnique({
        where: { name: code }
    })
    
    if (!promo) {
        return { success: false, message: 'Kode promo tidak ditemukan' }
    }
    
    if (!promo.isActive) {
        return { success: false, message: 'Kode promo sudah tidak aktif' }
    }
    
    return {
        success: true,
        data: {
            id: promo.id,
            name: promo.name,
            type: promo.type,
            value: promo.value
        }
    }
})
