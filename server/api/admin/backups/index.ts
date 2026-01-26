import { listBackups } from '../../../utils/backup'

export default defineEventHandler(async (event) => {
  // Ensure admin
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  return listBackups()
})
