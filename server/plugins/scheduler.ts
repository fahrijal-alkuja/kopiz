import { Cron } from 'croner'
import { performBackup } from '../utils/backup'
import { logActivity } from '../utils/logger'

export default defineNitroPlugin((nitroApp) => {
  console.log('Scheduler plugin initialized')

  // Schedule daily backup at 02:00 AM
  // Croner pattern: 0 2 * * *
  new Cron('0 2 * * *', async () => {
    console.log('Starting daily backup...')
    try {
      const filename = await performBackup()
      if (filename) {
        // Log to ActivityLog (System User ID usually 0 or null, we use null)
        await logActivity(null, 'CREATE', 'BACKUP', filename as string, 'Automatic Daily Backup')
      }
    } catch (e) {
      console.error('Scheduled backup failed', e)
    }
  })
})
