import { getBackupPath } from '../../../utils/backup'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  // Ensure admin
  const user = event.context.user
  if (!user || user.role !== 'OWNER') {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }

  const query = getQuery(event)
  const filename = query.file as string

  if (!filename) {
    throw createError({ statusCode: 400, statusMessage: 'Filename required' })
  }

  const filepath = getBackupPath(filename)
  if (!fs.existsSync(filepath)) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  return sendStream(event, fs.createReadStream(filepath))
})
