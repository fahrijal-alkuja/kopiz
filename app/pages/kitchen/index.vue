<template>
  <div class="kitchen-view">
    <div class="header">
      <h1>🧑‍🍳 Kitchen Display System</h1>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <button @click="toggleAudio" class="btn-icon" :class="{ 'active': audioEnabled }" title="Sound Alert">
          {{ audioEnabled ? '🔊 On' : '🔇 Off' }}
        </button>
        <div class="clock">{{ currentTime }}</div>
      </div>
    </div>

    <div class="kds-layout">
        <!-- LEFT SIDEBAR: ITEM SUMMARY (BATCHING) -->
        <div class="summary-sidebar">
            <div class="summary-header">
                <h3>🔥 Batch Masak</h3>
                <div style="font-size: 0.8rem; opacity: 0.7;">Total item yang harus dibuat</div>
            </div>
            <div class="summary-list">
                <div v-for="(qty, name) in itemSummary" :key="name" class="summary-item">
                    <div class="summary-qty">{{ qty }}</div>
                    <div class="summary-name">{{ name }}</div>
                </div>
                <div v-if="Object.keys(itemSummary).length === 0" style="text-align: center; padding: 2rem; opacity: 0.5;">
                    Tidak ada antrian
                </div>
            </div>
        </div>

        <!-- RIGHT: KANBAN BOARD -->
        <div class="kanban-wrapper">
             <div v-if="pendingOrders.length === 0 && processOrders.length === 0 && readyOrders.length === 0" class="empty-state">
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
                <div v-for="order in pendingOrders" :key="order.id" class="order-card" :class="getUrgencyClass(order.createdAt)">
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
                <div v-for="order in processOrders" :key="order.id" class="order-card" :class="getUrgencyClass(order.createdAt)">
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

            <!-- READY COLUMN (NEW) -->
            <div class="column">
                <div class="column-header ready">
                <h2>Siap Saji ({{ readyOrders.length }})</h2>
                </div>
                <div class="order-list">
                <div v-for="order in readyOrders" :key="order.id" class="order-card ready-card">
                    <div class="card-header">
                    <span class="table-badge ready">{{ order.tableNumber ? 'Meja ' + order.tableNumber : 'Takeaway' }}</span>
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
                    <button @click="updateStatus(order.id, 'COMPLETED')" class="btn btn-complete">
                        Tutup / Serve 👍
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { useIntervalFn, useNow, useDateFormat } from '@vueuse/core'

// SOUND: Ding Sound (Base64)
const dingSound = 'data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84AA0WAgAAAAAA9GP/7H3/8z//f/////3//9//+////9//3//7//7/////9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9//9'
const audioEnabled = ref(false)

function toggleAudio() {
  audioEnabled.value = !audioEnabled.value
  if (audioEnabled.value) {
    // Play silent to request permission
    new Audio(dingSound).play().catch(() => {})
  }
}

// Data Fetching
const { data: orders, refresh } = await useFetch('/api/orders', {
  query: { status: 'PENDING,PROCESS,READY', limit: 50 },
  key: 'kitchen-orders' 
})

// Audio Logic: Watch for New Orders
const lastPendingCount = ref(0) // Track last count

watch(orders, (newVal) => {
  const pendingCount = newVal?.filter(o => o.status === 'PENDING').length || 0
  
  // If pending count INCREASED, play sound
  if (pendingCount > lastPendingCount.value && audioEnabled.value) {
      new Audio(dingSound).play().catch(e => console.log('Audio blocked', e))
  }
  
  lastPendingCount.value = pendingCount
}, { deep: true })


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

const readyOrders = computed(() => 
  orders.value?.filter(o => o.status === 'READY') || []
)

// NEW: Item Summary (Batching)
const itemSummary = computed(() => {
    const summary = {}
    // Combine Pending & Process items (Active cooking)
    const activeOrders = [...pendingOrders.value, ...processOrders.value]
    
    activeOrders.forEach(order => {
        order.sales.forEach(sale => {
            if (summary[sale.menuItem.name]) {
                summary[sale.menuItem.name] += sale.qty
            } else {
                summary[sale.menuItem.name] = sale.qty
            }
        })
    })
    return summary
})

function timeAgo(date) {
  const diff = (new Date() - new Date(date)) / 1000 / 60
  if (diff < 1) return 'Baru saja'
  return `${Math.floor(diff)} menit lalu`
}

function getUrgencyClass(date) {
  const diff = (new Date() - new Date(date)) / 1000 / 60
  if (diff > 10) return 'status-critical'
  if (diff > 5) return 'status-warning'
  return 'status-normal' // Logic change: Explicit normal status
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
  title: 'KDS - Kopiz'
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

/* MAIN LAYOUT: SIDEBAR + KANBAN */
.kds-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    height: 100%;
    overflow: hidden;
}

/* SIDEBAR STYLES */
.summary-sidebar {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.summary-header {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}

.summary-header h3 {
    margin: 0;
    color: var(--color-primary);
}

.summary-list {
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.summary-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255,255,255,0.03);
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid var(--glass-border);
}

.summary-qty {
    background: var(--color-primary);
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.summary-name {
    font-weight: 600;
    font-size: 1rem;
}

/* KANBAN STYLES */
.kanban-wrapper {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.kanban-board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 Columns */
  gap: 1.5rem;
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
.column-header.ready h2 { color: var(--color-success); margin: 0; font-size: 1.2rem; }

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
  transition: all 0.3s;
}

/* URGENCY STATUS STYLES */
.status-normal {
    border-left: 4px solid var(--color-success); /* Fresh */
}

.status-warning {
    border-left: 4px solid var(--color-warning);
    border-color: var(--color-warning);
}

.status-critical {
  border: 2px solid var(--color-danger);
  border-left: 6px solid var(--color-danger);
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
  animation: pulse 2s infinite;
}

.ready-card { border-left: 4px solid var(--color-success); border-right: 1px solid var(--color-success); }


@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}

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

.table-badge.process { background: rgba(59, 130, 246, 0.1); color: var(--color-primary); }
.table-badge.ready { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }

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

.btn-complete {
    background: transparent;
    border: 2px solid var(--color-text-muted);
    color: var(--color-text-muted);
}
.btn-complete:hover {
    border-color: var(--color-success);
    color: var(--color-success);
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--color-text-muted);
}

.btn-icon {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}
.btn-icon.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
    .kds-layout {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
    
    .summary-sidebar {
        height: auto;
        max-height: 200px;
    }

    .kanban-board {
        grid-template-columns: 1fr; /* Stack on mobile */
        overflow-y: auto;
    }
    .kitchen-view {
        height: auto;
        min-height: 100vh;
    }
}
</style>
