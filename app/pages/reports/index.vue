<template>
  <div>
    <h1>Laporan Transaksi</h1>

    <div class="tabs" style="overflow-x: auto; scrollbar-width: none; white-space: nowrap;">
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'daily' }"
        @click="activeTab = 'daily'"
      >
        Laporan Harian
      </button>
      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'monthly' }"
        @click="activeTab = 'monthly'"
      >
        Laporan Bulanan
      </button>
      <button 
        v-if="isOwner"
        class="tab-btn" 
        :class="{ active: activeTab === 'pl' }"
        @click="activeTab = 'pl'"
      >
        Laba Rugi
      </button>
    </div>

    <!-- DAILY REPORT -->
    <div v-if="activeTab === 'daily'" class="card">
      <div class="filter-row">
        <label>Pilih Tanggal:</label>
        <input type="date" v-model="dailyDate" class="input" style="width: auto;">
        <button @click="exportDailyPDF" class="btn secondary">📄 Export PDF Harian</button>
      </div>

      <div class="table-container">
        <table class="report-table">
          <thead>
            <tr>
              <th>Jam</th>
              <th>ID Transaksi</th>
              <th>Item</th>
              <th>Metode</th>
              <th class="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="trx in dailyData" :key="trx.id">
              <td>{{ new Date(trx.date).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) }}</td>
              <td>{{ trx.displayId }}</td>
              <td>
                <div v-for="item in trx.items" :key="item.name" style="white-space: nowrap;">
                  {{ item.qty }}x {{ item.name }}
                </div>
              </td>
              <td>{{ trx.paymentMethod }}</td>
              <td class="text-right font-bold">{{ formatCurrency(trx.total) }}</td>
            </tr>
            <tr class="total-row">
              <td colspan="4">Total Penjualan Hari Ini</td>
              <td class="text-right">{{ formatCurrency(dailyTotal) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MONTHLY REPORT -->
    <div v-if="activeTab === 'monthly'" class="card">
      <div class="filter-row">
        <label>Pilih Bulan:</label>
        <input type="month" v-model="monthlyDate" class="input" style="width: auto;">
        <button @click="exportMonthlyPDF" class="btn secondary">📄 Export PDF Bulanan</button>
      </div>

      <div class="table-container">
        <table class="report-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Jumlah Transaksi</th>
              <th>Item Terjual</th>
              <th class="text-right">Total Pendapatan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="day in monthlyData" :key="day.date">
              <td>{{ formatDate(day.date) }}</td>
              <td>{{ day.transactionCount }}</td>
              <td>{{ day.itemCount }}</td>
              <td class="text-right font-bold">{{ formatCurrency(day.total) }}</td>
            </tr>
            <tr class="total-row">
              <td colspan="3">Total Pendapatan Bulan Ini</td>
              <td class="text-right">{{ formatCurrency(monthlyTotal) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- PROFIT LOSS REPORT (OWNER ONLY) -->
    <div v-if="activeTab === 'pl' && isOwner" class="card">
      <div class="filter-row">
        <select v-model="plType" class="select" style="width: auto;">
          <option value="daily">Harian</option>
          <option value="monthly">Bulanan</option>
        </select>
        
        <input v-if="plType === 'daily'" type="date" v-model="plDate" class="input" style="width: auto;">
        <input v-else type="month" v-model="plDate" class="input" style="width: auto;">
        
        <button @click="exportProfitLossPDF" class="btn secondary">📄 Export Laba Rugi</button>
      </div>

      <div v-if="plReport" class="pl-container">
        <div class="pl-summary pos-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 1rem;">
          <div class="stat-box blue">
            <div class="label">Pendapatan (Omset)</div>
            <div class="value">{{ formatCurrency(plReport.grossSales) }}</div>
          </div>
          <div class="stat-box orange">
            <div class="label">HPP (Pemakaian)</div>
            <div class="value">({{ formatCurrency(plReport.cogs) }})</div>
          </div>
          <div class="stat-box red">
            <div class="label">Pengeluaran Ops</div>
            <div class="value">({{ formatCurrency(plReport.expenseTotal) }})</div>
          </div>
          <div class="stat-box" :class="plReport.netProfit >= 0 ? 'green' : 'red'">
            <div class="label">Laba Bersih</div>
            <div class="value">{{ formatCurrency(plReport.netProfit) }}</div>
          </div>
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background: rgba(245, 158, 11, 0.05); border-radius: 0.5rem; border: 1px solid rgba(245, 158, 11, 0.1);">
          <div style="font-size: 0.9rem; color: var(--color-warning);">ℹ️ Info Arus Kas: **Total Belanja Stok (Cash Out)** di periode ini adalah **{{ formatCurrency(plReport.totalHppShopping) }}**. (Sudah termasuk belanja otomatis & manual).</div>
        </div>

        <h3 style="margin: 2rem 0 1rem;">Rincian Pengeluaran</h3>
        <div v-if="plReport.expenseDetails && plReport.expenseDetails.length > 0" class="table-container">
          <table class="report-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Kategori</th>
                <th>Deskripsi</th>
                <th class="text-right">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(exp, idx) in plReport.expenseDetails" :key="idx">
                <td>{{ formatDate(exp.date) }}</td>
                <td>{{ exp.category }}</td>
                <td>{{ exp.description }}</td>
                <td class="text-right">{{ formatCurrency(exp.amount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else style="text-align: center; padding: 1rem; color: var(--color-text-muted);">
          Tidak ada pengeluaran operasional.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const activeTab = ref('daily')
const dailyDate = ref(new Date().toISOString().split('T')[0])
const monthlyDate = ref(new Date().toISOString().slice(0, 7)) // YYYY-MM

// --- DAILY DATA ---
const { data: rawSales } = await useFetch('/api/sales', {
  query: computed(() => ({ date: dailyDate.value }))
})

interface TransactionGroup {
  id: string
  displayId: string
  date: string
  total: number
  paymentMethod: string
  items: { name: string, qty: number }[]
}

const dailyData = computed(() => {
  if (!rawSales.value) return []
  const groups: Record<string, TransactionGroup> = {}
  
  // Cast rawSales to any to iterate if type is lost, or defined strict type
  const salesArray = rawSales.value as any[] 
  
  salesArray.forEach(sale => {
    const key = sale.transactionId || `single-${sale.id}`
    if (!groups[key]) {
      groups[key] = {
        id: key,
        displayId: sale.transactionId ? `#${sale.id}` : `#${sale.id}`,
        date: sale.date,
        total: 0,
        paymentMethod: sale.paymentMethod,
        items: []
      }
    }
    groups[key].items.push({ name: sale.menuItem?.name || 'Unknown', qty: sale.qty })
    groups[key].total += sale.total
  })
  return Object.values(groups).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
})

const dailyTotal = computed(() => dailyData.value.reduce((sum, trx) => sum + trx.total, 0))

// --- MONTHLY DATA ---
const { data: monthlyReport } = await useFetch('/api/reports/monthly_list', {
  query: computed(() => ({ month: monthlyDate.value }))
})

const monthlyData = computed(() => (monthlyReport.value as any)?.report || [])
const monthlyTotal = computed(() => monthlyData.value.reduce((sum: number, day: any) => sum + day.total, 0))

// --- UILS ---
function formatCurrency(val: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

function formatDate(dateStr: string | Date) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  })
}

const { isOwner } = useAuth()

// --- PROFIT LOSS ---
const plType = ref('monthly')
const plDate = ref(new Date().toISOString().slice(0, 7)) // Default monthly

const { data: plReport } = await useFetch('/api/reports/profit_loss', {
  query: computed(() => ({ 
    type: plType.value, 
    date: plDate.value 
  })),
  watch: [plType, plDate] // Re-fetch when filters change
})

// --- PDF ACTIONS ---
function getLogoBase64(): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/jpeg'))
      } else {
        resolve('') 
      }
    }
    img.onerror = () => resolve('')
    img.src = '/logo.jpg'
  })
}

async function exportProfitLossPDF() {
  if (!plReport.value) return
  const doc = new jsPDF()
  const data = plReport.value
  
  const logoData = await getLogoBase64()
  if (logoData) {
    doc.addImage(logoData, 'JPEG', 14, 10, 25, 25)
  }
  
  doc.setFontSize(18)
  doc.text('Kopi Z - Laporan Laba Rugi', 45, 22)
  doc.setFontSize(11)
  doc.text(`Periode: ${data.period}`, 45, 30)
  
  let y = 45
  
  // Summary Table
  autoTable(doc, {
    startY: y,
    head: [['Keterangan', 'Jumlah']],
    body: [
      ['Pendapatan Kotor (Omset)', formatCurrency(data.grossSales)],
      ['HPP (Pemakaian Bahan)', `(${formatCurrency(data.cogs)})`],
      ['Laba Kotor', formatCurrency(data.grossProfit)],
      ['Total Pengeluaran Operasional', `(${formatCurrency(data.expenseTotal)})`],
      ['Total Belanja Stok (Arus Kas)', formatCurrency(data.totalHppShopping)],
      ['LABA BERSIH (NET PROFIT)', formatCurrency(data.netProfit)]
    ],
    theme: 'grid',
    headStyles: { fillColor: [16, 185, 129] },
    columnStyles: { 1: { halign: 'right', fontStyle: 'bold' } },
    didParseCell: (data) => {
      if (data.row.index === 5) {
        data.cell.styles.fontStyle = 'bold'
        data.cell.styles.fillColor = [240, 253, 244]
      }
    }
  })
  
  y = (doc as any).lastAutoTable.finalY + 10
  
  // Expense Details
  if (data.expenseDetails && data.expenseDetails.length > 0) {
    doc.text('Rincian Pengeluaran:', 14, y)
    y += 5
    
    autoTable(doc, {
      startY: y,
      head: [['Tanggal', 'Kategori', 'Deskripsi', 'Jumlah']],
      body: data.expenseDetails.map(e => [
        formatDate(e.date),
        e.category,
        e.description,
        formatCurrency(e.amount)
      ]),
      theme: 'grid',
      columnStyles: { 3: { halign: 'right' } }
    })
  }
  
  doc.save(`Laba_Rugi_${plDate.value}.pdf`)
}

// ... existing exports ...
async function exportDailyPDF() {
  const doc = new jsPDF()
  
  const logoData = await getLogoBase64()
  if (logoData) {
    doc.addImage(logoData, 'JPEG', 14, 10, 25, 25)
  }
  
  doc.setFontSize(18)
  doc.text('Kopi Z - Laporan Harian', 45, 22)
  doc.setFontSize(11)
  doc.text(`Tanggal: ${formatDate(dailyDate.value || '')}`, 45, 30)
  
  const tableData = dailyData.value.map(trx => [
    new Date(trx.date).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}),
    trx.displayId,
    trx.items.map(i => `${i.qty}x ${i.name}`).join(', '),
    trx.paymentMethod,
    formatCurrency(trx.total)
  ])
  
  // Add total row
  tableData.push(['', '', '', 'TOTAL', formatCurrency(dailyTotal.value)])

  autoTable(doc, {
    startY: 45,
    head: [['Jam', 'ID', 'Item', 'Metode', 'Total']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] }, // Blue primary color
    columnStyles: {
      4: { halign: 'right', fontStyle: 'bold' }
    }
  })
  
  doc.save(`Laporan_Harian_${dailyDate.value}.pdf`)
}

async function exportMonthlyPDF() {
  const doc = new jsPDF()
  
  const logoData = await getLogoBase64()
  if (logoData) {
    doc.addImage(logoData, 'JPEG', 14, 10, 25, 25)
  }
  
  doc.setFontSize(18)
  doc.text('Kopi Z - Laporan Bulanan', 45, 22)
  doc.setFontSize(11)
  doc.text(`Bulan: ${monthlyDate.value}`, 45, 30)
  
  const tableData = monthlyData.value.map((day: any) => [
    formatDate(day.date),
    day.transactionCount,
    day.itemCount,
    formatCurrency(day.total)
  ])
  
  // Add total row
  tableData.push(['', '', 'TOTAL', formatCurrency(monthlyTotal.value)])

  autoTable(doc, {
    startY: 45,
    head: [['Tanggal', 'Transaksi', 'Item Terjual', 'Pendapatan']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },
    columnStyles: {
      3: { halign: 'right', fontStyle: 'bold' }
    }
  })
  
  doc.save(`Laporan_Bulanan_${monthlyDate.value}.pdf`)
}
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-border);
}

.tab-btn {
  background: none;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-muted);
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
}

.tab-btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.filter-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap; /* Optimization for narrow screens */
}

.report-table {
  width: 100%;
  border-collapse: collapse;
}

.report-table th, .report-table td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  text-align: left;
}

.text-right { text-align: right; }
.font-bold { font-weight: bold; }

.total-row td {
  border-top: 2px solid var(--color-text);
  font-weight: bold;
  font-size: 1.1rem;
  padding-top: 1rem;
}

.pl-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stat-box {
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.stat-box .label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.stat-box .value {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-box.blue .value { color: #3b82f6; }
.stat-box.orange .value { color: #f59e0b; }
.stat-box.red .value { color: #ef4444; }
.stat-box.green .value { color: #10b981; }

@media (max-width: 600px) {
  .tab-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
