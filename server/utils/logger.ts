import prisma from './db'

export const logActivity = async (
  userId: number | null,
  action: string,
  entity: string,
  entityId: string | null = null,
  description: string | null = null,
  metadata: any = null
) => {
  try {
    await prisma.activityLog.create({
      data: {
        userId,
        action,
        entity,
        entityId: entityId ? String(entityId) : null,
        description,
        metadata,
      },
    })
  } catch (error) {
    console.error('Failed to create activity log', error)
  }
}
