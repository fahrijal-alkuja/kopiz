import Dexie, { type Table } from 'dexie'

export interface OfflineSale {
  id?: number
  items: any[]
  total: number
  paymentMethod: string
  createdAt: Date
  synced: boolean
}

export class AppDatabase extends Dexie {
  offlineSales!: Table<OfflineSale>

  constructor() {
    super('AppKopzDatabase')
    this.version(1).stores({
      offlineSales: '++id, createdAt, synced'
    })
  }
}

export const db = new AppDatabase()
