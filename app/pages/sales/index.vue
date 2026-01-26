<template>
  <div>
    <h1>Transaksi Penjualan</h1>
    
    <div class="pos-container">
      <!-- Main Content: Menu & History -->
      <div class="main-content">
        <!-- Category & Item Selection Section -->
        <div class="card" style="margin-bottom: 2rem;">
          <h3 style="margin-bottom: 1.5rem;">Pilih Menu</h3>
          
          <!-- Category Tabs -->
          <div class="category-tabs" style="display: flex; gap: 0.5rem; overflow-x: auto; margin-bottom: 25px; scrollbar-width: none; padding-bottom: 5px;">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="selectedCategory = cat"
              :class="['btn', selectedCategory === cat ? 'btn-primary' : '']"
              :style="selectedCategory !== cat ? { background: 'var(--color-surface-soft)', color: 'var(--color-text-muted)' } : {}"
              style="padding: 0.5rem 1.25rem; border-radius: 2rem; white-space: nowrap;"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Item Search -->
          <div style="margin-bottom: 1.5rem;">
            <input v-model="searchQuery" type="text" class="input" placeholder="Cari menu..." style="margin-bottom: 0;">
          </div>

          <!-- Scrollable Grid of Items -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 1rem; max-height: 550px; overflow-y: auto; padding-right: 0.5rem; scrollbar-width: thin; padding-bottom: 2rem;">
            <div 
              v-for="item in filteredMenuItems" 
              :key="item.id"
              @click="quickAddToCart(item)"
              class="card item-card"
              style="padding: 1.25rem 1rem; cursor: pointer; text-align: center; border: 1px solid var(--color-border); transition: transform 0.1s;"
            >
              <div style="font-weight: 700; margin-bottom: 0.5rem; font-size: 0.95rem;">{{ item.name }}</div>
              <div style="color: var(--color-primary); font-size: 0.85rem; font-weight: 600;">Rp {{ item.price.toLocaleString('id-ID') }}</div>
            </div>
          </div>
        </div>

        <!-- History Section -->
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3>Riwayat Transaksi (Hari Ini)</h3>
            <input type="date" v-model="filterDate" class="input" style="width: auto; margin:0;">
          </div>
          
          <div v-if="groupedSales && groupedSales.length > 0" class="history-grid">
            <div v-for="trx in groupedSales" :key="trx.id" class="history-item">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <span style="font-weight: bold; margin-right: 0.5rem;">{{ trx.displayId }}</span>
                  <span style="font-size: 0.85rem; color: var(--color-text-muted);">{{ new Date(trx.date).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) }}</span>
                </div>
                <div>
                  <span class="text-success" style="font-weight: bold;">Rp {{ trx.total.toLocaleString('id-ID') }}</span>
                  <span style="margin-left: 0.5rem; font-size: 0.8rem; background: var(--color-bg); padding: 0.2rem 0.5rem; border-radius: 4px;">{{ trx.paymentMethod }}</span>
                </div>
              </div>
              
              <div style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span v-for="(item, idx) in trx.items" :key="idx">
                  {{ item.qty }}x {{ item.name }}{{ idx < trx.items.length - 1 ? ', ' : '' }}
                </span>
              </div>

              <div style="text-align: right; display: flex; justify-content: flex-end; gap: 0.5rem;">
                <button @click="printTransaction(trx)" title="Cetak" class="btn-icon">🖨️</button>
                <button @click="editTransaction(trx)" title="Edit" class="btn-icon" style="color: var(--color-warning);">✏️</button>
                <button @click="deleteTransaction(trx)" title="Hapus" class="btn-icon" style="color: var(--color-danger);">🗑️</button>
              </div>
            </div>
          </div>
          <div v-else style="text-align: center; color: var(--color-text-muted); padding: 2rem;">
            Belum ada transaksi harian.
          </div>
        </div>
      </div>

      <!-- Floating Checkout Bar (Mobile/Tablet Friendly) -->
      <div v-if="cart.length > 0" class="checkout-bar" @click="showCartDrawer = true">
        <div class="checkout-info">
          <div class="item-count">{{ cartTotalQty }} Item Terpilih</div>
          <div class="total-price">Rp {{ cartTotal.toLocaleString('id-ID') }}</div>
        </div>
        <button class="btn btn-primary" style="padding: 0.5rem 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);">
          Lihat Pesanan 🛒
        </button>
      </div>
    </div>

    <!-- Cart Drawer (Modal) -->
    <BaseModal
      v-model:show="showCartDrawer"
      title="Konfirmasi Pesanan"
      :show-cancel="true"
      confirm-text="Bayar & Simpan"
      @confirm="submitTransaction"
    >
        <div class="table-container">
          <table style="width: 100%; font-size: 0.95rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--color-border);">
                <th style="padding: 0.75rem 0;">Item</th>
                <th style="padding: 0.75rem 0; text-align: center;">Qty</th>
                <th style="padding: 0.75rem 0; text-align: right;">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="index" style="border-bottom: 1px dashed var(--color-border);">
                <td style="padding: 0.75rem 0; font-weight: 500;">{{ item.name }}</td>
                <td style="padding: 0.75rem 0; text-align: center;">
                  <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                    <button @click="adjustQty(index, -1)" class="qty-btn">-</button>
                    <span>{{ item.qty }}</span>
                    <button @click="adjustQty(index, 1)" class="qty-btn">+</button>
                  </div>
                </td>
                <td style="padding: 0.75rem 0; text-align: right;">{{ item.total.toLocaleString() }}</td>
                <td style="padding: 0.75rem 0; text-align: right;">
                  <button @click="removeFromCart(index)" style="color: var(--color-danger); background: none; border: none; cursor:pointer; font-size: 1.5rem; padding: 10px; line-height: 1;">&times;</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Payment Method Selection -->
        <div style="background: var(--color-bg); padding: 1.25rem; border-radius: 0.75rem; margin-bottom: 1.5rem; border: 1px solid var(--glass-border);">
          <label style="font-size: 0.85rem; color: var(--color-text-muted); display: block; margin-bottom: 0.75rem; font-weight: 600;">METODE PEMBAYARAN</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            <button 
              type="button"
              @click="paymentMethod = 'Cash'" 
              :class="['payment-btn', { active: paymentMethod === 'Cash' }]"
              style="padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--glass-border); cursor: pointer; font-weight: 600;"
            >💵 Cash</button>
            <button 
              type="button"
              @click="paymentMethod = 'QRIS'" 
              :class="['payment-btn', { active: paymentMethod === 'QRIS' }]"
              style="padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--glass-border); cursor: pointer; font-weight: 600;"
            >📱 QRIS</button>
          </div>
          <!-- Auto Print Toggle -->
          <div style="margin-top: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <input type="checkbox" id="autoprint" v-model="isAutoPrint" style="width: 18px; height: 18px; accent-color: var(--color-primary); cursor: pointer;">
            <label for="autoprint" style="cursor: pointer; color: var(--color-text); font-weight: 500;">Cetak Struk Otomatis</label>
          </div>
        </div>

        <!-- Promo Selection -->
        <div v-if="promos && promos.length > 0" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(59, 130, 246, 0.05); border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.1);">
          <div style="font-weight: 600; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem; color: var(--color-primary);">PILIH PROMO</span>
            <span v-if="selectedPromo" @click="selectedPromo = null" style="color: var(--color-danger); font-size: 0.75rem; cursor: pointer; background: rgba(239, 68, 68, 0.1); padding: 2px 8px; border-radius: 4px;">Hapus</span>
          </div>
          <div style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 0.5rem; scrollbar-width: none;">
            <div 
              v-for="p in promos.filter(p => p.isActive)" :key="p.id"
              @click="selectedPromo = p"
              :style="{ 
                border: selectedPromo?.id === p.id ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)', 
                background: selectedPromo?.id === p.id ? 'var(--color-primary-glow)' : 'rgba(255,255,255,0.05)',
                transform: selectedPromo?.id === p.id ? 'scale(1.02)' : 'scale(1)'
              }"
              style="padding: 0.75rem 1rem; border-radius: 0.75rem; cursor: pointer; white-space: nowrap; min-width: 140px; transition: all 0.2s;"
            >
              <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 2px;">{{ p.name }}</div>
              <div style="font-size: 0.8rem; color: var(--color-text-muted);">{{ p.type === 'PERCENT' ? '-' + p.value + '%' : '-Rp ' + p.value.toLocaleString('id-ID') }}</div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div style="margin-bottom: 1.5rem; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid var(--glass-border); background: rgba(255,255,255,0.02);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: var(--color-text-muted);">Subtotal</span>
            <span style="font-weight: 500;">Rp {{ cartTotal.toLocaleString('id-ID') }}</span>
          </div>
          <div v-if="discountAmount > 0" style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; color: var(--color-danger); font-weight: 600;">
            <span>Potongan ({{ selectedPromo?.name }})</span>
            <span>-Rp {{ discountAmount.toLocaleString('id-ID') }}</span>
          </div>
          <hr style="border: 0; border-top: 1px solid var(--glass-border); margin: 0.75rem 0;">
          <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.25rem;">
            <span>TOTAL BAYAR</span>
            <span class="text-success">Rp {{ Math.max(0, cartTotal - discountAmount).toLocaleString('id-ID') }}</span>
          </div>
        </div>

        <!-- Takeaway Toggle -->
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(59, 130, 246, 0.05); border-radius: 0.75rem; border: 1px solid rgba(59, 130, 246, 0.1); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">Takeaway / Bungkus</div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted);">Gunakan kemasan & paper bag</div>
          </div>
          <div @click="isTakeaway = !isTakeaway" :style="{ background: isTakeaway ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)' }" style="width: 50px; height: 26px; border-radius: 13px; cursor: pointer; position: relative; transition: background 0.3s;">
            <div :style="{ left: isTakeaway ? '26px' : '3px' }" style="position: absolute; top: 3px; width: 20px; height: 20px; border-radius: 50%; background: white; transition: left 0.3s;"></div>
          </div>
        </div>
        
        <button @click="cancelCart" style="width: 100%; background: transparent; border: 1px solid var(--color-danger); color: var(--color-danger); padding: 0.75rem; border-radius: 0.5rem; cursor: pointer;">
          Kosongkan Keranjang
        </button>
    </BaseModal>

    <!-- Modern Modals -->
    <BaseModal
      v-model:show="modal.show"
      :title="modal.title"
      :message="modal.message"
      :show-cancel="modal.showCancel"
      :confirm-text="modal.confirmText"
      :confirm-class="modal.confirmClass"
      @confirm="modal.onConfirm"
    />

    <!-- Thermal Receipt Component -->
    <ReceiptTemplate v-if="printingTransaction" :transaction="printingTransaction" />
  </div>
</template>

<script setup>
// Load Data
const { data: menuItems } = await useFetch('/api/menu')

const today = new Date().toISOString().split('T')[0]
const filterDate = ref(today)

const { data: sales, refresh: refreshSales } = await useFetch('/api/sales', {
  query: { date: filterDate } // reactive query
})

import { useNetwork } from '@vueuse/core'
import { db } from '~/utils/db'

const { isOnline } = useNetwork()
const { user } = useAuth()

// Group Sales by Transaction ID for History List
const groupedSales = computed(() => {
  if (!sales.value) return []
  
  const groups = {}
  sales.value.forEach(sale => {
    // Fallback for old data without transactionId: use ID as unique key or just group singly
    const key = sale.transactionId || `single-${sale.id}`
    
    if (!groups[key]) {
      groups[key] = {
        id: key,
        displayId: sale.transactionId ? `#${sale.id}` : `#${sale.id}`, // Simplified display
        date: sale.date,
        total: 0,
        paymentMethod: sale.paymentMethod,
        items: []
      }
    }
    
    groups[key].items.push({
      name: sale.menuItem?.name || 'Unknown',
      qty: sale.qty,
      price: sale.priceSnapshot,
      total: sale.total,
      id: sale.id // individual sale id
    })
    
    groups[key].total += sale.total
  })
  
  return Object.values(groups).sort((a, b) => new Date(b.date) - new Date(a.date))
})

// Modal State
const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: true,
  confirmText: 'Ya, Lanjutkan',
  confirmClass: 'btn-primary',
  onConfirm: () => {}
})

function showAlert(title, message) {
  modal.value = {
    show: true,
    title,
    message,
    showCancel: false,
    confirmText: 'OK',
    confirmClass: 'btn-primary',
    onConfirm: () => {}
  }
}

function showConfirm(title, message, onConfirm) {
  modal.value = {
    show: true,
    title,
    message,
    showCancel: true,
    confirmText: 'Ya, Hapus',
    confirmClass: 'btn-danger',
    onConfirm
  }
}

// POS Logic Enhancements
const selectedCategory = ref('Semua')
const searchQuery = ref('')
const categories = computed(() => {
  if (!menuItems.value) return ['Semua']
  const cats = new Set(menuItems.value.map(i => i.category))
  return ['Semua', ...Array.from(cats).sort()]
})

const filteredMenuItems = computed(() => {
  if (!menuItems.value) return []
  return menuItems.value.filter(item => {
    const matchesCategory = selectedCategory.value === 'Semua' || item.category === selectedCategory.value
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

function quickAddToCart(menu) {
  // Check if already in cart
  const existing = cart.value.find(i => i.menuItemId === menu.id)
  if (existing) {
    existing.qty += 1
    existing.total = existing.qty * existing.price
  } else {
    cart.value.push({
      menuItemId: menu.id,
      name: menu.name,
      qty: 1,
      price: menu.price,
      total: menu.price
    })
  }
}

// CART LOGIC
const cart = ref([])
const paymentMethod = ref('Cash')
const isTakeaway = ref(false)
const isAutoPrint = ref(true)
const selectedPromo = ref(null)
const { data: promos } = await useFetch('/api/promo')
const showCartDrawer = ref(false)

const cartTotalQty = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.qty, 0)
})

function adjustQty(index, delta) {
  const item = cart.value[index]
  item.qty += delta
  if (item.qty <= 0) {
    removeFromCart(index)
  } else {
    item.total = item.qty * item.price
  }
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}

const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.total, 0)
})

function cancelCart() {
  showConfirm(
    'Batalkan Pesanan?',
    'Seluruh item di keranjang akan dihapus. Lanjutkan?',
    () => {
      cart.value = []
    }
  )
}

const discountAmount = computed(() => {
  if (!selectedPromo.value) return 0
  if (selectedPromo.value.type === 'PERCENT') {
    return Math.floor((cartTotal.value * selectedPromo.value.value) / 100)
  }
  return selectedPromo.value.value
})

async function submitTransaction() {
  if (cart.value.length === 0) return
  
  // Capture state for printing
  const currentCart = [...cart.value]
  const currentTotal = cartTotal.value
  const currentDiscount = discountAmount.value
  const currentPayment = paymentMethod.value

  try {
    let response = []
    
    if (isOnline.value) {
      response = await $fetch('/api/sales', {
        method: 'POST',
        body: {
          items: cart.value.map(i => ({ menuItemId: i.menuItemId, qty: i.qty })),
          paymentMethod: paymentMethod.value,
          isTakeaway: isTakeaway.value,
          promoId: selectedPromo.value?.id,
          discountAmount: discountAmount.value
        }
      })
    } else {
      // Offline Mode
      const offlineId = await db.offlineSales.add({
        items: cart.value.map(i => ({ menuItemId: i.menuItemId, qty: i.qty })),
        paymentMethod: paymentMethod.value,
        total: Math.max(0, currentTotal - currentDiscount),
        createdAt: new Date(),
        synced: 0
      })
      
      // Mock response for printing
      response = [{
        transactionId: `OFFLINE-${offlineId}`,
        total: Math.max(0, currentTotal - currentDiscount),
        paymentMethod: currentPayment,
        date: new Date()
      }]
      
      showAlert('Offline Mode', 'Transaksi disimpan di perangkat. Akan disinkronisasi saat online.')
    }
    
    // Auto Print
    if (isAutoPrint.value && response && response.length > 0) {
      const trxId = response[0].transactionId || 'NEW'
      
      printTransaction({
        id: trxId,
        date: new Date(),
        total: Math.max(0, currentTotal - currentDiscount),
        paymentMethod: currentPayment,
        cashier: user.value?.name || 'Barista',
        items: currentCart.map(i => ({
          name: i.name,
          qty: i.qty,
          total: i.total
        }))
      })
    }
    
    // Success
    cart.value = []
    isTakeaway.value = false
    selectedPromo.value = null
    showCartDrawer.value = false
    if (isOnline.value) refreshSales()
  } catch (e) {
    showAlert('Error', e.message)
  }
}

// PRINT LOGIC
const printingTransaction = ref(null)

function printTransaction(trx) {
  printingTransaction.value = trx
  setTimeout(() => {
    window.print()
    printingTransaction.value = null
  }, 100)
}

// DELETE LOGIC
function deleteTransaction(trx) {
  showConfirm(
    'Hapus Transaksi?',
    'Stok bahan akan dikembalikan ke inventaris. Transaksi ini akan dihapus permanen.',
    async () => {
      try {
        // Use ID if transactionId is missing (legacy) or transactionId if available
        const payload = trx.id.startsWith('single-') 
          ? { id: trx.id.replace('single-', '') }
          : { transactionId: trx.id }

        await $fetch('/api/sales', {
          method: 'DELETE',
          body: payload
        })
        refreshSales()
      } catch (e) {
        showAlert('Error', e.message)
      }
    }
  )
}

function editTransaction(trx) {
  showConfirm(
    'Edit Transaksi?',
    'Transaksi lama akan DIHAPUS dan item akan dikembalikan ke keranjang untuk diedit. Lanjutkan?',
    async () => {
      try {
        // 1. Restore to Cart
        cart.value = trx.items.map(i => ({
          menuItemId: findMenuIdByName(i.name), // Helper to match name back to ID if not stored, wait, we stored ID in local group? No.
          // In groupedSales processing, I stored `id` as sale ID. 
          // I need menuItemId to re-add to cart properly for re-submission.
          // Let's check groupedSales logic. It stores item.name.
          // Better to find ID from name or store menuItemId in groupedSales.
          menuItemId: findMenuIdByName(i.name), 
          name: i.name,
          qty: i.qty,
          price: i.price,
          total: i.total
        }))

        paymentMethod.value = trx.paymentMethod

        // 2. Delete old transaction
        const payload = trx.id.startsWith('single-') 
          ? { id: trx.id.replace('single-', '') }
          : { transactionId: trx.id }

        await $fetch('/api/sales', {
          method: 'DELETE',
          body: payload
        })
        
        refreshSales()
      } catch (e) {
        showAlert('Error', e.message)
      }
    }
  )
}

function findMenuIdByName(name) {
  const item = menuItems.value.find(i => i.name === name)
  return item ? item.id : null
}
</script>

<style>
/* Global Print Styles */
/* Global Print Styles */
/* Global Print Styles */
@media print {
  /* Only global settings, specific layout is in ReceiptTemplate */
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>

<style scoped>
.pos-container {
  padding-bottom: 80px; /* Space for hidden floating checkout bar */
}

.main-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }
}

/* Mobile Landscape Optimization */
@media (orientation: landscape) and (max-height: 500px) {
  h1 { display: none; } /* Hide redundant page title */
  .pos-container { margin-top: 0; }
  .card { padding: 0.75rem !important; margin-bottom: 0.75rem !important; }
  .card h3 { margin-bottom: 0.5rem !important; font-size: 1.1rem; }
  .main-content { margin-top: 0.25rem !important; }
  .category-tabs { margin-bottom: 10px !important; }
}

.item-card:hover {
  border-color: var(--color-primary) !important;
  background: var(--color-primary-glow);
  transform: translateY(-2px);
}

.history-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 0.5rem;
  scrollbar-width: thin;
}

.history-item {
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1rem;
  background: rgba(255,255,255,0.02);
}

.checkout-bar {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  background: rgba(15, 18, 28, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-primary);
  border-radius: 1.25rem;
  padding: 1rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.6);
  z-index: 1000;
  cursor: pointer;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from { transform: translate(-50%, 100%); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
}

.checkout-info {
  display: flex;
  flex-direction: column;
}

.item-count {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.total-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-success);
}

.qty-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-surface-soft);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.qty-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-icon {
  background: none;
  border: 1px solid var(--color-border);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.btn-icon:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--color-primary);
}

.btn-danger {
  background: var(--color-danger);
  color: white;
}

.print-only {
  display: none;
}
</style>
