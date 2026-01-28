<template>
  <div>
    <h1>Transaksi Penjualan</h1>
    
    <!-- SHIFT BLOCKER OVERLAY -->
    <div v-if="!isShiftOpen" style="position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(10px);">
      <div style="text-align: center; background: var(--color-surface); padding: 2rem; border-radius: 1rem; border: 1px solid var(--color-danger); max-width: 400px;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🛑</div>
        <h2 style="color: var(--color-danger); margin-bottom: 0.5rem;">Shift Belum Dibuka</h2>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Anda tidak dapat melakukan transaksi sebelum membuka shift kasir.
        </p>
        <NuxtLink to="/shifts" class="btn btn-primary" style="width: 100%; text-decoration: none; display: inline-block;">
          Buka Shift Sekarang
        </NuxtLink>
      </div>
    </div>

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
      :show-cancel="false"
      max-width="500px"
    >
        <!-- TOTAL BILL AT TOP -->
        <div style="margin-bottom: 2rem;">
          <label style="font-size: 0.85rem; color: var(--color-text-muted); display: block; margin-bottom: 0.25rem;">Total Tagihan</label>
          <div style="font-size: 2.5rem; font-weight: 800; color: white; display:flex; align-items: baseline;">
            <span style="font-size: 1.5rem; color: var(--color-primary); margin-right: 0.5rem;">Rp</span>
            {{ Math.max(0, cartTotal - discountAmount).toLocaleString('id-ID') }}
          </div>
          <div v-if="discountAmount > 0" style="color: var(--color-success); font-size: 0.9rem; margin-top: 0.25rem;">
            Hemat Rp {{ discountAmount.toLocaleString('id-ID') }}
          </div>
        </div>

        <!-- PAYMENT METHOD -->
        <div style="margin-bottom: 2rem;">
          <label style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-bottom: 1rem; letter-spacing: 0.05em; text-transform: uppercase;">Metode Pembayaran</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
             <button 
               type="button"
               @click="paymentMethod = 'Cash'" 
               :class="['payment-btn', { active: paymentMethod === 'Cash' }]"
             >
               <span style="font-size: 1.25rem; margin-right: 0.5rem;">💵</span> 
               <span>Tunai</span>
             </button>
             <button 
               type="button"
               @click="paymentMethod = 'QRIS'" 
               :class="['payment-btn', { active: paymentMethod === 'QRIS' }]"
             >
               <span style="font-size: 1.25rem; margin-right: 0.5rem;">📱</span>
               <span>QRIS</span>
             </button>
          </div>
        </div>

        <!-- CASH INPUT & GRID -->
        <Transition name="fade">
          <div v-if="paymentMethod === 'Cash'" style="background: rgba(255,255,255,0.02); border-radius: 1.25rem; padding: 1.5rem; border: 1px solid var(--glass-border); margin-bottom: 2rem;">
            
            <!-- Input Field -->
             <div class="input-group-lg" :class="{ 'error-border': cashAmount < (cartTotal - discountAmount) && cashAmount > 0 }">
               <span class="currency-prefix">Rp</span>
               <input 
                 type="text" 
                 :value="formatCurrencyInput(cashAmount)" 
                 @input="onCashInput"
                 class="input-lg" 
                 placeholder="0"
               >
             </div>

             <!-- Quick Cash Grid -->
             <div class="cash-grid">
               <button @click="setCash('exact')" class="btn-cash-quick accent">Uang Pas</button>
               <button @click="setCash(10000)" class="btn-cash-quick">10rb</button>
               <button @click="setCash(20000)" class="btn-cash-quick">20rb</button>
               <button @click="setCash(50000)" class="btn-cash-quick">50rb</button>
               <button @click="setCash(100000)" class="btn-cash-quick">100rb</button>
             </div>
             
             <!-- Kembalian Display (Only if enough cash) -->
             <Transition name="fade">
               <div v-if="change > 0" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                 <span style="color: var(--color-text-muted);">Kembalian</span>
                 <span style="font-size: 1.5rem; font-weight: 800; color: var(--color-warning);">Rp {{ change.toLocaleString('id-ID') }}</span>
               </div>
             </Transition>
          </div>
        </Transition>

        <!-- ITEMS PREVIEW (Collapsible or Small) -->
        <div style="margin-bottom: 1rem;">
           <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0;">
             <div @click="showItemsDetail = !showItemsDetail" style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <span style="font-size: 0.9rem;">Rincian Pesanan ({{ cartTotalQty }} Item)</span>
                <span :style="{ transform: showItemsDetail ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.2s' }" style="font-size: 0.8rem;">›</span>
             </div>
             <button @click="cancelCart" style="background: none; border: none; color: var(--color-danger); font-size: 0.8rem; cursor: pointer; padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px;">
               <span>🗑️</span> Hapus Semua
             </button>
           </div>
           
           <Transition name="fade">
             <div v-if="showItemsDetail" style="margin-top: 0.5rem; max-height: 250px; overflow-y: auto; font-size: 0.9rem; padding: 0.5rem; background: rgba(0,0,0,0.2); border-radius: 0.75rem;">
                <div v-for="(item, index) in cart" :key="index" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px dashed var(--glass-border);">
                  <div style="flex: 1;">
                    <div style="font-weight: 500;">{{ item.name }}</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-muted);">@ {{ item.price.toLocaleString() }}</div>
                  </div>
                  
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <!-- Quantity Controls -->
                    <div style="display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.1); border-radius: 20px; padding: 2px;">
                      <button @click="adjustQty(index, -1)" style="width: 24px; height: 24px; border-radius: 50%; border: none; background: transparent; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;">-</button>
                      <span style="font-weight: 600; min-width: 16px; text-align: center;">{{ item.qty }}</span>
                      <button @click="adjustQty(index, 1)" style="width: 24px; height: 24px; border-radius: 50%; border: none; background: transparent; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;">+</button>
                    </div>
                    
                    <div style="width: 80px; text-align: right; font-weight: 600;">{{ item.total.toLocaleString() }}</div>
                  </div>
                </div>
             </div>
           </Transition>
        </div>
        
        <!-- Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
           <div class="toggle-wrapper">
              <label>Cetak Struk</label>
              <input type="checkbox" v-model="isAutoPrint" class="toggle-input">
           </div>
           <div class="toggle-wrapper">
              <label>Takeaway</label>
              <input type="checkbox" v-model="isTakeaway" class="toggle-input">
           </div>
        </div>

      <template #footer>
        <div style="display: flex; gap: 1rem; width: 100%;">
           <button @click="showCartDrawer = false" class="btn-footer-secondary">
             Batal
           </button>
           <button 
             @click="submitTransaction" 
             class="btn-footer-primary"
             :disabled="paymentMethod === 'Cash' && cashAmount < (cartTotal - discountAmount)"
           >
             <div>Bayar & Simpan</div>
             <div style="font-size: 0.8rem; font-weight: 400; opacity: 0.8;">
               {{ paymentMethod === 'Cash' ? (change > 0 ? 'Kembalian Rp ' + change.toLocaleString('id-ID') : 'Uang Pas') : 'QRIS / Digital' }}
             </div>
           </button>
        </div>
      </template>
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
const { user, isOwner } = useAuth()

// Shift Check
const { data: activeShift } = await useFetch('/api/shifts/active')
const isShiftOpen = computed(() => !!activeShift.value || isOwner.value) // Owner bypass or valid shift

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
const showItemsDetail = ref(false)

// CASH & CHANGE LOGIC
const cashAmount = ref(0)

const change = computed(() => {
  if (paymentMethod.value !== 'Cash') return 0
  const finalTotal = Math.max(0, cartTotal.value - discountAmount.value)
  return Math.max(0, cashAmount.value - finalTotal)
})

function setCash(amount) {
  const finalTotal = Math.max(0, cartTotal.value - discountAmount.value)
  if (amount === 'exact') {
    cashAmount.value = finalTotal
  } else {
    cashAmount.value = amount
  }
}

// FORMATTER
function formatCurrencyInput(value) {
  if (!value) return ''
  return new Intl.NumberFormat('id-ID').format(value)
}

function onCashInput(event) {
  // Strip non-numeric chars
  const rawValue = event.target.value.replace(/\D/g, '')
  cashAmount.value = rawValue ? parseInt(rawValue, 10) : 0
  
  // Force update display value if needed? Vue v-model usually requires specific handling
  // But here we rely on :value binding.
}

// Reset cash when opening drawer or cart changes
watch(showCartDrawer, (val) => {
  if (val) {
    cashAmount.value = 0 // Or set default to total? stick to 0 to force input or 'uang pas'
  }
})

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
  
  const finalTotal = Math.max(0, cartTotal.value - discountAmount.value)
  
  // Validate Cash
  if (paymentMethod.value === 'Cash' && cashAmount.value < finalTotal) {
    showAlert('Pembayaran Kurang', 'Nominal uang tunai kurang dari total tagihan.')
    return
  }
  
  // Capture state for printing
  const currentCart = [...cart.value]
  const currentTotal = cartTotal.value
  const currentDiscount = discountAmount.value
  const currentPayment = paymentMethod.value
  const currentCash = cashAmount.value
  const currentChange = change.value

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
          discountAmount: discountAmount.value,
          // We can send cash details if backend supports logging, but for now it's mainly for print
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
        total: Math.max(0, currentTotal - currentDiscount),
        paymentMethod: currentPayment,
        cashProvided: currentCash,
        change: currentChange,
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

/* Redesigned Modal Styles */
.input-group-lg {
  display: flex;
  align-items: center;
  background: var(--color-bg);
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  overflow: hidden;
  height: 64px;
  margin-bottom: 1.5rem;
  transition: all 0.2s;
}

.input-group-lg.error-border {
  border-color: var(--color-danger);
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15);
}

.currency-prefix {
  padding: 0 1.5rem;
  color: var(--color-primary);
  font-weight: 800;
  font-size: 1.25rem;
  background: rgba(59, 130, 246, 0.1);
  height: 100%;
  display: flex;
  align-items: center;
}

.input-group-lg.error-border .currency-prefix {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-danger);
}

.input-lg {
  flex: 1;
  border: none;
  background: transparent;
  color: white;
  padding: 0 1.5rem;
  font-size: 1.75rem;
  font-weight: bold;
  outline: none;
  height: 100%;
  width: 100%;
}

.cash-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.btn-cash-quick {
  padding: 0.85rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--glass-border);
  color: var(--color-text);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s;
}

.btn-cash-quick:active {
  transform: scale(0.95);
  background: rgba(255,255,255,0.1);
}

.btn-cash-quick.accent {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
  color: var(--color-primary);
}

.btn-footer-primary {
  flex: 2;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--color-primary-glow);
  transition: all 0.2s;
}

.btn-footer-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.btn-footer-primary:active:not(:disabled) {
  transform: scale(0.98);
}

.btn-footer-secondary {
  flex: 1;
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--color-text-muted);
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.toggle-input {
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
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

.btn-quick {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-quick:hover {
  background: var(--color-primary-glow);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-icon-danger {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: var(--color-danger);
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s;
}

.btn-icon-danger:hover {
  background: var(--color-danger);
  color: white;
}
</style>
