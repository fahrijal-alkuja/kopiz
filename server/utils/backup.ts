import { exec } from 'child_process'
import path from 'path'
import fs from 'fs'

const BACKUP_DIR = path.resolve(process.cwd(), 'storage/backups')

// Ensure backup dir exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
}

export const performBackup = async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = `backup-${timestamp}.sql`
  const filepath = path.join(BACKUP_DIR, filename)

  // Use environment variables or default local config
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    console.error('DATABASE_URL is not defined, cannot backup')
    return null
  }

  // Basic pg_dump command
  // Note: pg_dump must be in PATH. 
  // We extract connection info from DATABASE_URL if needed, but modern pg_dump accepts connection string.
  const cmd = `pg_dump "${dbUrl}" > "${filepath}"`

  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error('Backup failed:', error)
        // Log activity failed if possible, but logger is async so we just log to console
        reject(error)
      } else {
        console.log(`Backup created at ${filepath}`)
        resolve(filename)
      }
    })
  })
}

export const listBackups = () => {
  if (!fs.existsSync(BACKUP_DIR)) return []
  const files = fs.readdirSync(BACKUP_DIR)
  return files
    .filter(f => f.endsWith('.sql'))
    .map(f => {
      const stats = fs.statSync(path.join(BACKUP_DIR, f))
      return {
        name: f,
        size: stats.size,
        createdAt: stats.birthtime
      }
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export const getBackupPath = (filename: string) => {
  return path.join(BACKUP_DIR, filename)
}
