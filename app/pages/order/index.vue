<template>
  <div class="customer-container">
    <!-- Header Section -->
    <div class="header-section">
      <div class="brand-header">
        <img src="/logo.jpg" alt="KopiZ Logo" class="brand-logo" />
        <div class="brand-info">
          <h1>KopiZ</h1>
          <p>Freshly Brewed for You</p>
        </div>
      </div>
      
      <!-- Order Type Selector -->
      <div class="order-type-selector">
        <button 
          v-for="type in orderTypes" 
          :key="type.value"
          @click="orderType = type.value"
          :class="{ active: orderType === type.value }"
        >
          <span class="type-icon">{{ type.icon }}</span>
          <span>{{ type.label }}</span>
        </button>
      </div>

      <!-- Detail Inputs -->
      <div class="customer-inputs card-glass">
        <!-- Dine In -->
        <transition name="fade" mode="out-in">
          <div v-if="orderType === 'dinein'" key="dinein" class="input-form">
            <label>Nama Pemesan</label>
            <input 
              v-model="customerName" 
              type="text" 
              placeholder="Masukkan Nama Anda"
              class="form-input"
            />
            <small v-if="hasTableParam" style="color: var(--color-primary); margin-top: 0.5rem; display: block;">
               Meja Terdeteksi: {{ tableNumber }}
            </small>
          </div>

          <!-- Takeaway -->
          <div v-else-if="orderType === 'takeaway'" key="takeaway" class="input-form">
            <label>Nama Pemesan</label>
            <input 
              v-model="customerName" 
              type="text" 
              placeholder="Masukkan nama Anda"
              class="form-input"
            />
          </div>

          <!-- Delivery -->
          <div v-else-if="orderType === 'delivery'" key="delivery" class="input-form">
            <div class="form-group">
               <label>Nama Pemesan</label>
               <input v-model="customerName" type="text" placeholder="Nama Anda" class="form-input" />
            </div>
            <div class="form-group mt-2">
               <label>Alamat Lengkap (WhatsApp / Info)</label>
               <textarea v-model="deliveryAddress" placeholder="Alamat pengiriman..." class="form-input" rows="2"></textarea>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Category Filter -->
    <div class="sticky-categories">
      <div class="categories">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          :class="{ active: selectedCategory === cat }"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Menu Grid -->
    <div class="menu-grid">
      <div 
        v-for="item in filteredItems" 
        :key="item.id" 
        class="menu-card"
        @click="addToCart(item)"
      >
        <div class="card-content">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">{{ formatCurrency(item.price) }}</p>
          </div>
          <button class="add-btn">
            <span v-if="getItemQty(item.id) > 0" class="qty-badge">{{ getItemQty(item.id) }}</span>
            <span v-else>+</span>
          </button>
        </div>
      </div>
       <div v-if="filteredItems.length === 0" class="empty-state">
          <p>Belum ada menu di kategori ini.</p>
      </div>
    </div>

    <!-- Floating Cart Button -->
    <transition name="slide-up">
      <div v-if="cart.length > 0" class="floating-cart" @click="showCartModal = true">
        <div class="cart-info">
          <span class="cart-count">{{ totalQty }} item</span>
          <span class="cart-total">{{ formatCurrency(totalPrice) }}</span>
        </div>
        <div class="cart-action">
          Lihat Pesanan &rarr;
        </div>
      </div>
    </transition>

    <!-- Cart Modal -->
    <Teleport to="body">
      <div v-if="showCartModal" class="modal-overlay" @click.self="showCartModal = false">
        <div class="modal-content">
          <div class="modal-header">
             <h2>Pesanan Anda</h2>
             <button @click="showCartModal = false" class="close-btn">&times;</button>
          </div>

          <!-- Order Summary in Modal (Table/Name) -->
          <div class="order-info-summary" :class="{ 'error-pulse': nameError }">
             <div style="margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
                <span v-if="orderType === 'dinein'">🍽️ Dine In <span v-if="tableNumber">• Meja {{ tableNumber }}</span></span>
                <span v-if="orderType === 'takeaway'">🛍️ Takeaway</span>
                <span v-if="orderType === 'delivery'">🛵 Delivery</span>
                
                <small style="color: #94a3b8; font-size: 0.8rem;" v-if="tableNumber && orderType === 'dinein'">(Otomatis)</small>
             </div>
             
             <!-- In-Modal Name Input -->
          <div 
                style="background: rgba(0,0,0,0.2); border-radius: 0.5rem; padding: 0.5rem 0.75rem; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; transition: border-color 0.3s;"
                :style="nameError ? 'border-color: var(--color-danger); box-shadow: 0 0 0 1px var(--color-danger);' : ''"
             >
                 <label style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.25rem;">
                    Nama Pemesan <span style="color: var(--color-danger)">*</span>
                 </label>
                 <input 
                    v-model="customerName" 
                    type="text" 
                    placeholder="Wajib diisi..." 
                    style="background: transparent; border: none; color: white; font-weight: 600; font-size: 1rem; width: 100%; outline: none;"
                    @input="nameError = false"
                 />
             </div>
             
             <!-- Address Input (Only for Delivery) -->
             <div v-if="orderType === 'delivery'" 
                style="margin-top: 0.75rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem; padding: 0.5rem 0.75rem; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; transition: border-color 0.3s;"
                :style="addressError ? 'border-color: var(--color-danger); box-shadow: 0 0 0 1px var(--color-danger);' : ''"
             >
                 <label style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 0.25rem;">
                    Alamat Lengkap (Wajib) <span style="color: var(--color-danger)">*</span>
                 </label>
                 <textarea 
                    v-model="deliveryAddress" 
                    placeholder="Jalan, Nomor Rumah, Patokan..." 
                    style="background: transparent; border: none; color: white; font-weight: 600; font-size: 0.9rem; width: 100%; outline: none; resize: none; font-family: inherit;"
                    rows="2"
                    @input="addressError = false"
                 ></textarea>
             </div>

             <div v-show="nameError" style="color: var(--color-danger); font-size: 0.85rem; margin-top: 0.5rem; font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                 <span>⚠️</span> Mohon isi nama Anda untuk melanjutkan
             </div>
             <div v-show="addressError" style="color: var(--color-danger); font-size: 0.85rem; margin-top: 0.5rem; font-weight: bold; display: flex; align-items: center; gap: 0.25rem;">
                 <span>⚠️</span> Mohon isi alamat lengkap pengiriman
             </div>
          </div>

          <div class="cart-items">
            <div v-for="(item, idx) in cart" :key="idx" class="cart-row">
              <div class="cart-item-name">
                <h4>{{ item.name }}</h4>
                <small>{{ formatCurrency(item.price) }}</small>
              </div>
              <div class="qty-control">
                <button @click="adjustQty(idx, -1)">&minus;</button>
                <span>{{ item.qty }}</span>
                <button @click="adjustQty(idx, 1)">&plus;</button>
              </div>
            </div>
          </div>

          <!-- Totals -->
          <div class="cart-footer">
             <div class="total-row">
                <span>Total Bayar</span>
                <span class="grand-total">{{ formatCurrency(totalPrice) }}</span>
             </div>
             
             <button 
              class="btn-checkout" 
              @click="submitOrder" 
              :disabled="isSubmitting"
             >
                <span v-if="isSubmitting">Mengirim...</span>
                <span v-else>Pesan Sekarang</span>
             </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Success Modal -->
    <Teleport to="body">
       <div v-if="orderSuccess" class="modal-overlay success-overlay">
          <div class="modal-content success-content">
              <div class="success-icon">✅</div>
              <h2>Pesanan Diterima!</h2>
              
              <div class="order-id">
                 ID: #{{ orderId }} &bull; Total: {{ formatCurrency(lastOrderTotal) }}
              </div>

              <!-- DELIVERY: QRIS & WA Logic -->
              <div v-if="orderType === 'delivery'" style="margin: 1.5rem 0;">
                  <p style="color: #cbd5e1; font-size: 0.9rem; margin-bottom: 1rem;">
                    Silakan scan QRIS di bawah untuk pembayaran, lalu kirim bukti transfer via WhatsApp agar pesanan diproses.
                  </p>
                  
                  <div style="background: white; padding: 10px; border-radius: 10px; display: inline-block; margin-bottom: 1rem;">
                    <img src="/qris-payment.jpg" alt="QRIS KopiZ" style="width: 200px; height: auto; display: block;" />
                  </div>

                  <a :href="whatsappUrl" target="_blank" class="btn-whatsapp">
                    <span style="font-size: 1.2rem;">📱</span> Konfirmasi & Kirim Bukti Bayar
                  </a>
              </div>

              <div class="success-info" v-else>
                  <p v-if="orderType === 'dinein'">Mohon tunggu dipanggil atas nama <b>{{ customerName }}</b></p>
                  <p v-if="orderType === 'takeaway'">Silakan tunggu dipanggil atas nama <b>{{ customerName }}</b></p>
              </div>

              <button @click="reloadPage" class="btn-primary-full" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); margin-top: 1rem;">
                Tutup / Pesan Lagi
              </button>
          </div>
       </div>
    </Teleport>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'customer'
})

const route = useRoute()
const { success, error } = useToast()

// Data props
const hasTableParam = computed(() => !!route.query.table)
const tableNumber = ref(route.query.table || '')
const customerName = ref('')
const deliveryAddress = ref('')
const orderType = ref('dinein') // dinein, takeaway, delivery

const orderTypes = [
  { value: 'dinein', label: 'Dine In', icon: '🍽️' },
  { value: 'takeaway', label: 'Bungkus', icon: '🛍️' },
  { value: 'delivery', label: 'Antar', icon: '🛵' }
]

// Logic to auto-switch if no table param
onMounted(() => {
    if (!hasTableParam.value) {
        // If no table param, maybe default to global/takeaway? 
        // But let's keep Dine In as default but require manual input.
    }
})

// Menu
const { data: menuItems } = await useFetch('/api/menu')

const selectedCategory = ref('Semua')
const categories = computed(() => {
    if (!menuItems.value) return ['Semua']
    const cats = new Set(menuItems.value.map(i => i.category))
    return ['Semua', ...Array.from(cats).sort()]
})

const filteredItems = computed(() => {
    if (!menuItems.value) return []
    if (selectedCategory.value === 'Semua') return menuItems.value.sort((a,b) => a.category.localeCompare(b.category))
    return menuItems.value.filter(i => i.category === selectedCategory.value)
})

// Cart
const cart = ref([])
// Persistence
onMounted(() => {
    const savedCart = localStorage.getItem('kopiz_cart')
    if (savedCart) {
        try {
            cart.value = JSON.parse(savedCart)
        } catch (e) { localStorage.removeItem('kopiz_cart') }
    }
})

watch(cart, (newVal) => {
    localStorage.setItem('kopiz_cart', JSON.stringify(newVal))
}, { deep: true })
const showCartModal = ref(false)
const isSubmitting = ref(false)
const orderSuccess = ref(false)
const orderId = ref(null)
const nameError = ref(false)
const addressError = ref(false)

function formatCurrency(val) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

function addToCart(item) {
    const existing = cart.value.find(c => c.id === item.id)
    if (existing) {
        existing.qty++
    } else {
        cart.value.push({ ...item, qty: 1 })
    }
    // Haptic equivalent
    if (navigator.vibrate) navigator.vibrate(50)
}

function getItemQty(id) {
    const item = cart.value.find(c => c.id === id)
    return item ? item.qty : 0
}

function adjustQty(idx, delta) {
    const item = cart.value[idx]
    item.qty += delta
    if (item.qty <= 0) {
        cart.value.splice(idx, 1)
        if (cart.value.length === 0) showCartModal.value = false
    }
}

const totalQty = computed(() => cart.value.reduce((a, b) => a + b.qty, 0))
const totalPrice = computed(() => cart.value.reduce((a, b) => a + (b.qty * b.price), 0))

async function submitOrder() {
    isSubmitting.value = true
    nameError.value = false
    addressError.value = false
    
    // Validation
    if (cart.value.length === 0) {
        error('Keranjang masih kosong!')
        isSubmitting.value = false
        return
    }

    let finalTableNumber = ''
    let finalCustomerName = ''

    if (orderType.value === 'dinein') {
        if (!customerName.value) {
            nameError.value = true
            error('Mohon isi Nama Pemesan di atas')
            // Vibrate to alert
            if (navigator.vibrate) navigator.vibrate(200)
            isSubmitting.value = false
            return
        }
        // Use detected table number or default to "DINE_IN"
        finalTableNumber = tableNumber.value ? String(tableNumber.value) : 'DINE_IN'
        finalCustomerName = customerName.value
    } else if (orderType.value === 'takeaway') {
        if (!customerName.value) {
            nameError.value = true
            error('Mohon isi Nama Pemesan')
            isSubmitting.value = false
            return
        }
        finalTableNumber = 'TAKEAWAY'
        finalCustomerName = customerName.value + ' (Bungkus)'
    } else if (orderType.value === 'delivery') {
         if (!customerName.value) {
            nameError.value = true
            error('Mohon isi Nama Pemesan')
            isSubmitting.value = false
            return
        }
        if (!deliveryAddress.value) {
             addressError.value = true // Highlight address field
             error('Mohon isi Alamat Pengiriman')
             isSubmitting.value = false
             return
        }
        finalTableNumber = 'DELIVERY'
        finalCustomerName = `${customerName.value} (Antar: ${deliveryAddress.value})`
    }

    try {
        const res = await $fetch('/api/customer/order', {
            method: 'POST',
            body: {
                tableNumber: finalTableNumber,
                items: cart.value.map(i => ({ menuItemId: i.id, qty: i.qty })),
                customerName: finalCustomerName
            }
        })
        
        if (res.success) {
            orderId.value = res.transactionId
            // Capture total for display in success modal
            lastOrderTotal.value = totalPrice.value 
            
            orderSuccess.value = true
            cart.value = []
            showCartModal.value = false
            success('Pesanan berhasil dikirim!')
        }
    } catch (e) {
        error('Gagal mengirim pesanan: ' + e.message)
    } finally {
        isSubmitting.value = false
    }
}

const lastOrderTotal = ref(0)

const whatsappUrl = computed(() => {
  if (!orderId.value) return ''
  
  // Format message
  let text = `Halo Admin KopiZ, saya mau konfirmasi pesanan *Delivery*.\n\n`
  text += `ID Pesanan: *#${orderId.value}*\n`
  text += `Atas Nama: *${customerName.value.replace(' (Antar: ' + deliveryAddress.value + ')', '')}*\n`
  text += `Alamat Antar: ${deliveryAddress.value}\n`
  text += `Total: *${formatCurrency(lastOrderTotal.value)}*\n\n`
  text += `Saya sudah melakukan pembayaran via QRIS. Berikut bukti transfernya.`

  return `https://wa.me/6285393464054?text=${encodeURIComponent(text)}`
})

function reloadPage() {
    orderSuccess.value = false
    customerName.value = ''
    deliveryAddress.value = ''
    cart.value = [] // clear cart just in case
    // Keep tableNumber if it was from param
    if (!hasTableParam.value) tableNumber.value = ''
}
</script>

<style scoped>
.customer-container {
    padding-bottom: 100px;
    background: #0f172a;
    min-height: 100vh;
}

/* Header */
.header-section {
    background: linear-gradient(to bottom, #1e293b, #0f172a);
    padding: 2rem 1.5rem 1rem 1.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.brand-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.brand-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    object-fit: cover;
}

.brand-info h1 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 800;
    color: white;
    letter-spacing: -0.5px;
}

.brand-info p {
    margin: 0;
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Order Type Selector */
.order-type-selector {
    display: flex;
    background: rgba(255,255,255,0.05);
    padding: 0.3rem;
    border-radius: 1rem;
    gap: 0.3rem;
    margin-bottom: 1.5rem;
}

.order-type-selector button {
    flex: 1;
    background: transparent;
    border: none;
    padding: 0.75rem 0.5rem;
    color: #94a3b8;
    border-radius: 0.75rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
}

.order-type-selector button.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.type-icon {
    font-size: 1.2rem;
}

/* Inputs */
.customer-inputs {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 1rem;
    padding: 1rem;
}

.input-form label {
    display: block;
    color: #94a3b8;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.form-input {
    width: 100%;
    background: rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 0.8rem 1rem;
    border-radius: 0.7rem;
    color: white;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-input:focus {
    border-color: var(--color-primary);
}

/* Categories */
.sticky-categories {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.5rem 0;
    margin-bottom: 1rem;
}

.categories {
    display: flex;
    overflow-x: auto;
    gap: 0.75rem;
    padding: 0.5rem 1.5rem;
    scrollbar-width: none;
}

.categories::-webkit-scrollbar {
    display: none;
}

.categories button {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #cbd5e1;
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
    font-weight: 500;
}

.categories button.active {
    background: white;
    color: #0f172a;
    border-color: white;
    font-weight: 700;
}

/* Menu Grid */
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
    padding: 0 1.5rem;
}

.menu-card {
    background: #1e293b;
    border-radius: 1.2rem;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(255,255,255,0.03);
    transition: transform 0.2s;
}

.menu-card:active {
    transform: scale(0.98);
}

.card-content {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.item-details h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.3;
}

.price {
    font-weight: 700;
    color: var(--color-primary);
    font-size: 1.1rem;
}

.add-btn {
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
}

.add-btn:active, .add-btn span.qty-badge {
    background: var(--color-primary);
}

.qty-badge {
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
}

.empty-state {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: #64748b;
}

/* Floating Cart */
.floating-cart {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    background: var(--color-primary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    z-index: 50;
    font-weight: 600;
    animation: slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cart-total {
    font-size: 1.1rem;
    font-weight: 800;
    margin-left: 0.5rem;
}

.cart-count {
    background: rgba(0,0,0,0.2);
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
}

/* Modals */
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    z-index: 100;
    display: flex;
    align-items: flex-end;
}

.success-overlay {
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal-content {
    background: #1e293b;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1.5rem;
    max-height: 85vh;
    overflow-y: auto;
    animation: slideUp 0.3s ease-out;
}

.success-content {
    border-radius: 1.5rem;
    text-align: center;
    animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.modal-header h2 {
    margin: 0;
    font-size: 1.4rem;
}

.close-btn {
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 2rem;
    padding: 0;
    line-height: 1;
    cursor: pointer;
}

.order-info-summary {
    background: rgba(255,255,255,0.05);
    padding: 0.8rem;
    border-radius: 0.8rem;
    color: #cbd5e1;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.cart-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px dashed rgba(255,255,255,0.1);
}

.qty-control {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: rgba(0,0,0,0.2);
    padding: 0.3rem;
    border-radius: 2rem;
}

.qty-control button {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-footer {
    margin-top: 2rem;
}

.total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.grand-total {
    font-weight: 800;
    color: var(--color-primary);
    font-size: 1.4rem;
}

.btn-checkout, .btn-primary-full {
    width: 100%;
    background: var(--color-primary);
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
}

/* WhatsApp Button */
.btn-whatsapp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #25d366;
    color: white;
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.75rem;
    font-weight: 700;
    margin-top: 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
}

.btn-whatsapp:active {
    transform: scale(0.98);
}

.success-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.order-id {
    font-family: monospace;
    background: rgba(0,0,0,0.3);
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
    color: #fbbf24;
    font-weight: bold;
}

@keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
}

@keyframes popIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.error-pulse {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    border: 1px solid var(--color-danger) !important;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
</style>
