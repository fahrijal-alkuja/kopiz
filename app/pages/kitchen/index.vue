<template>
  <div class="kitchen-view">
    <div class="header">
      <h1>🧑‍🍳 Kitchen Display System</h1>
      <div class="clock">{{ currentTime }}</div>
    </div>

    <div v-if="pendingOrders.length === 0 && processOrders.length === 0" class="empty-state">
      <div style="font-size: 3rem;">😴</div>
      <h2>Tidak ada pesanan aktif</h2>
      <p>Santai sejenak sambil menunggu pesanan baru.</p>
    </div>

    <div class="kanban-board">
      <!-- PENDING COLUMN -->
      <div class="column">
        <div class="column-header pending">
          <h2>Baru Masuk ({{ pendingOrders.length }})</h2>
        </div>
        <div class="order-list">
          <div v-for="order in pendingOrders" :key="order.id" class="order-card pending-card">
            <div class="card-header">
              <span class="table-badge">{{ order.tableNumber ? 'Meja ' + order.tableNumber : 'Takeaway' }}</span>
              <span class="time-ago">{{ timeAgo(order.createdAt) }}</span>
            </div>
            <div class="customer-name">{{ order.customerName || 'Guest' }}</div>
            <div class="order-id">#{{ order.transactionId.slice(0,8) }}</div>
            
            <div class="items-list">
              <div v-for="sale in order.sales" :key="sale.id" class="order-item">
                <span class="qty">{{ sale.qty }}x</span>
                <span class="name">{{ sale.menuItem.name }}</span>
              </div>
            </div>

            <div class="card-actions">
              <button @click="updateStatus(order.id, 'PROCESS')" class="btn btn-process">
                Mulai Masak 🍳
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- PROCESS COLUMN -->
      <div class="column">
        <div class="column-header process">
          <h2>Sedang Disiapkan ({{ processOrders.length }})</h2>
        </div>
        <div class="order-list">
          <div v-for="order in processOrders" :key="order.id" class="order-card process-card">
            <div class="card-header">
              <span class="table-badge process">{{ order.tableNumber ? 'Meja ' + order.tableNumber : 'Takeaway' }}</span>
              <span class="time-ago">{{ timeAgo(order.createdAt) }}</span>
            </div>
            <div class="customer-name">{{ order.customerName || 'Guest' }}</div>
             <div class="order-id">#{{ order.transactionId.slice(0,8) }}</div>
            
            <div class="items-list">
              <div v-for="sale in order.sales" :key="sale.id" class="order-item">
                <span class="qty">{{ sale.qty }}x</span>
                <span class="name">{{ sale.menuItem.name }}</span>
              </div>
            </div>

            <div class="card-actions">
              <button @click="updateStatus(order.id, 'READY')" class="btn btn-ready">
                Selesai / Ready ✅
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntervalFn, useNow, useDateFormat } from '@vueuse/core'

const { data: orders, refresh } = await useFetch('/api/orders', {
  query: { status: 'PENDING,PROCESS', limit: 50 },
  key: 'kitchen-orders' // Unique key to prevent caching conflicts
})

// Auto refresh every 10 seconds
useIntervalFn(() => {
  refresh()
}, 10000)

const currentTime = useDateFormat(useNow(), 'HH:mm:ss')

const pendingOrders = computed(() => 
  orders.value?.filter(o => o.status === 'PENDING') || []
)

const processOrders = computed(() => 
  orders.value?.filter(o => o.status === 'PROCESS') || []
)

function timeAgo(date) {
  const diff = (new Date() - new Date(date)) / 1000 / 60
  if (diff < 1) return 'Baru saja'
  return `${Math.floor(diff)} menit lalu`
}

async function updateStatus(id, newStatus) {
  try {
    await $fetch(`/api/orders/${id}`, {
      method: 'PUT',
      body: { status: newStatus }
    })
    refresh()
  } catch (e) {
    alert('Gagal update status: ' + e.message)
  }
}

// Ensure head meta for full screen feel
useHead({
  title: 'Kitchen Display - Kopiz'
})

definePageMeta({
  layout: 'default' 
})
</script>

<style scoped>
.kitchen-view {
  padding: 1rem;
  height: calc(100vh - 80px); /* Adjust based on navbar */
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.clock {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: monospace;
  background: var(--color-surface);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
}

.kanban-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
  overflow: hidden; 
}

.column {
  background: rgba(255,255,255,0.03);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.column-header {
  padding: 1rem;
  background: rgba(0,0,0,0.2);
  border-bottom: 1px solid var(--color-border);
}

.column-header.pending h2 { color: var(--color-warning); margin: 0; font-size: 1.2rem; }
.column-header.process h2 { color: var(--color-primary); margin: 0; font-size: 1.2rem; }

.order-list {
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.order-card {
  background: var(--color-surface);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  animation: slideIn 0.3s ease-out;
}

.pending-card { border-left: 4px solid var(--color-warning); }
.process-card { border-left: 4px solid var(--color-primary); }

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.table-badge {
  background: var(--color-surface-soft);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.85rem;
}

.time-ago {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.customer-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0px;
}
.order-id {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    font-family: monospace;
    margin-bottom: 0.75rem;
}

.items-list {
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed var(--color-border);
}

.order-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.qty {
  font-weight: bold; 
  color: var(--color-primary);
  min-width: 24px;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: transform 0.1s;
}
.btn:hover { transform: translateY(-2px); }

.btn-process {
  background: var(--color-primary);
  color: white;
}

.btn-ready {
  background: var(--color-success);
  color: white;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--color-text-muted);
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
