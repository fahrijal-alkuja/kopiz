<template>
  <div>
    <div class="dashboard-header" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
      <h1>Dashboard & Laporan</h1>
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <input type="date" v-model="filterDate" class="input" style="width: auto; margin: 0;">
        <a :href="`/api/reports/monthly_csv?date=${filterDate}`" download class="btn" style="background: var(--color-success); text-decoration: none;">Unduh Laporan (CSV)</a>
      </div>
    </div>

    <div v-if="data">
      <!-- ALERTS SECTION -->
      <section v-if="data.lowStock && data.lowStock.length > 0" style="margin-bottom: 2rem;">
        <div class="card" style="border-left: 4px solid var(--color-danger); background: hsla(0, 72%, 51%, 0.05);">
          <h3 style="color: var(--color-danger); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚠️</span> Logistik & Inventaris (Kritis)
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
            <div v-for="m in data.lowStock" :key="m.id" style="padding: 0.75rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem; border: 1px solid hsla(0, 72%, 51%, 0.2);">
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">{{ m.name }}</div>
              <div style="font-weight: bold; color: var(--color-danger);">Sisa {{ m.stock }} {{ m.unit }}</div>
              <div v-if="m.daysRemaining !== undefined && m.daysRemaining < 30" style="font-size: 0.75rem; color: var(--color-warning); margin-top: 2px;">
                Est. Habis: {{ m.daysRemaining }} hari
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SHIFT STATUS -->
      <section style="margin-bottom: 2rem;">
        <div class="card" :style="{ borderLeft: '4px solid ' + (data.activeShift ? 'var(--color-success)' : 'var(--color-warning)') }">
           <div style="display: flex; justify-content: space-between; align-items: center;">
             <div>
               <div class="label">Status Kasir / Shift</div>
               <div style="font-weight: bold;">{{ data.activeShift ? 'Sedang Beroperasi' : 'Shift Belum Dibuka' }}</div>
             </div>
             <NuxtLink to="/shifts" class="btn" style="background: var(--color-border); color: var(--color-text);">Kelola Shift</NuxtLink>
           </div>
        </div>
      </section>

      <!-- WELCOME BARISTA -->
      <section v-if="!isOwner" style="margin-bottom: 2rem;">
        <div class="card" style="background: linear-gradient(to right, #1e293b, #0f172a);">
          <h2>👋 Halo, Semangat Bekerja!</h2>
          <p>Pastikan stok aman dan layani pelanggan dengan senyum.</p>
        </div>
      </section>

      <!-- ANALYTICS SECTION (OWNER ONLY) -->
      <section v-if="isOwner" class="pos-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Omset Trend Chart -->
        <div class="card" style="overflow: hidden;">
          <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: var(--color-text-muted);">Tren Omset Bulan Ini</h3>
          <div class="table-container" style="margin-bottom: 0; padding-bottom: 10px;">
            <div style="height: 300px; width: 100%;">
              <Line v-if="chartData" :data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>

        <!-- Top 5 Menu -->
        <div class="card">
          <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: var(--color-text-muted);">Top 5 Menu (Profit Margin)</h3>
          <ul style="list-style: none; padding: 0;">
            <li v-for="(item, index) in data.topItems" :key="index" style="display: flex; flex-direction: column; padding: 1rem 0; border-bottom: 1px solid var(--color-border);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-weight: 600;">{{ index + 1 }}. {{ item.name }}</span>
                <span class="badge" style="background: var(--color-primary-glow); color: var(--color-primary); font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px;">{{ item.qty }} pcs</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--color-text-muted);">
                <span>Laba: <span style="color: var(--color-success);">Rp {{ item.profit.toLocaleString('id-ID') }}</span></span>
                <span style="font-weight: bold; color: var(--color-primary);">{{ item.margin.toFixed(0) }}% Margin</span>
              </div>
            </li>
          </ul>
          <div v-if="!data.topItems || data.topItems.length === 0" style="text-align: center; color: var(--color-text-muted); padding: 1rem;">
            Belum ada penjualan.
          </div>
        </div>
      </section>

      <!-- DAILY SECTION -->
      <section style="margin-bottom: 3rem;">
        <h3 style="color: var(--color-text-muted); margin-bottom: 1rem;">Laporan Harian ({{ formatDate(data.date) }})</h3>
        <div class="grid-4">
          <div class="stat-card">
            <div class="label">Omset Hari Ini</div>
            <div class="value success">Rp {{ data.daily.omset.toLocaleString('id-ID') }}</div>
            <div class="sub">Total {{ data.daily.transactionCount }} Transaksi</div>
          </div>
          <div v-if="isOwner" class="stat-card">
            <div class="label">Laba Bersih (Net)</div>
            <div class="value" :class="data.daily.netProfit >= 0 ? 'success' : 'danger'">
              Rp {{ data.daily.netProfit.toLocaleString('id-ID') }}
            </div>
            <div class="sub">Setelah Gaji/Sewa/Ops</div>
          </div>
          <div v-if="isOwner" class="stat-card">
            <div class="label">Laba Kotor (Gross)</div>
            <div class="value warning">Rp {{ data.daily.grossProfit.toLocaleString('id-ID') }}</div>
            <div class="sub">Omset - HPP Produk</div>
          </div>
          <div class="stat-card">
            <div class="label">Metode Pembayaran</div>
            <div class="sub">Cash: <span style="color: var(--color-text)">{{ data.daily.cash.toLocaleString('id-ID') }}</span></div>
            <div class="sub">QRIS: <span style="color: var(--color-text)">{{ data.daily.qris.toLocaleString('id-ID') }}</span></div>
          </div>
        </div>
      </section>

      <!-- MONTHLY SECTION (OWNER ONLY) -->
      <section v-if="isOwner">
        <h3 style="color: var(--color-text-muted); margin-bottom: 1rem;">Laporan Bulan Ini</h3>
        <div class="grid-4" style="margin-bottom: 2rem;">
           <div class="stat-card">
            <div class="label">Omset Bulanan</div>
            <div class="value text-primary">Rp {{ data.monthly.omset.toLocaleString('id-ID') }}</div>
          </div>
           <div class="stat-card">
            <div class="label">Laba Kotor (Gross)</div>
            <div class="value success">Rp {{ data.monthly.grossProfit.toLocaleString('id-ID') }}</div>
            <div class="sub">Omset - HPP</div>
          </div>
           <div class="stat-card">
            <div class="label">Laba Bersih (Net)</div>
            <div class="value" :class="data.monthly.netProfit >= 0 ? 'success' : 'danger'">
              Rp {{ data.monthly.netProfit.toLocaleString('id-ID') }}
            </div>
            <div class="sub">Gross - Pengeluaran OPS</div>
          </div>
        </div>
        <div class="grid-4" style="margin-bottom: 2rem;">
           <div class="stat-card">
            <div class="label">Total HPP</div>
            <div class="value warning">Rp {{ data.monthly.expenseHpp.toLocaleString('id-ID') }}</div>
          </div>
           <div class="stat-card">
            <div class="label">Total OPS</div>
            <div class="value warning">Rp {{ data.monthly.expenseOps.toLocaleString('id-ID') }}</div>
          </div>
        </div>

        <!-- Monthly Breakdown Table -->
        <div class="card">
          <h4>Rincian Harian Bulan Ini</h4>
          <div class="table-container" style="max-height: 400px; overflow-y: auto;">
             <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Omset</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="day in data.monthly.chartData" :key="day.day">
                  <td>{{ day.day }}</td>
                  <td>Rp {{ day.omset.toLocaleString('id-ID') }}</td>
                </tr>
              </tbody>
             </table>
          </div>
        </div>
      </section>
    </div>
    <div v-else style="padding: 2rem; text-align: center;">Loading...</div>
  </div>
</template>

<script setup>
import { 
  Chart as ChartJS, 
  Title, 
  Tooltip, 
  Legend, 
  LineElement, 
  PointElement, 
  CategoryScale, 
  LinearScale 
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  Title, 
  Tooltip, 
  Legend, 
  LineElement, 
  PointElement, 
  CategoryScale, 
  LinearScale
)

const today = new Date().toISOString().split('T')[0]
const filterDate = ref(today)
const { isOwner } = useAuth()

const { data } = await useFetch('/api/dashboard/summary', {
  query: { date: filterDate }
})

// Chart Config
const chartData = computed(() => {
  if (!data.value?.monthly?.chartData) return null
  return {
    labels: data.value.monthly.chartData.map(d => d.day),
    datasets: [{
      label: 'Omset (Rp)',
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      data: data.value.monthly.chartData.map(d => d.omset),
      tension: 0.3
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: 'rgba(255,255,255,0.05)' }
    },
    x: {
      grid: { display: false }
    }
  }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<style scoped>
.grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: 1.5rem;
  border-radius: var(--radius-pro);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-premium);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.value {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.sub {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.success { color: var(--color-success); }
.danger { color: var(--color-danger); }
.warning { color: var(--color-warning); }
.text-primary { color: var(--color-primary); }
</style>
