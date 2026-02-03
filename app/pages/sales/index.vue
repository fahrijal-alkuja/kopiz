<template>
  <div>
    <!-- Navigation / Header -->
    <div class="pos-header">
      <div class="header-left">
        <h1 class="logo">☕ Kopiz POS</h1>
        <div class="shift-info" v-if="activeShift">
          <span class="status-dot"></span>
          Shift #{{ activeShift.id }}
        </div>
      </div>
      
      <div class="header-right">
        <!-- New Tabs for View Switching -->
        <div class="view-tabs">
            <button 
              @click="activeView = 'POS'" 
              :class="['tab-btn', { active: activeView === 'POS' }]"
              title="Mode Kasir"
            >
              🛒 Kasir
            </button>
            <button 
              @click="viewIncomingOrders" 
              :class="['tab-btn', { active: showIncomingModal }]"
              title="Pesanan dari QR"
              style="position: relative;"
            >
              📱 Pesanan Masuk <span v-if="incomingOrders.length > 0" class="badge-count" style="background: var(--color-primary);">{{ incomingOrders.length }}</span>
            </button>
            <button 
              @click="showUnpaidModal = true" 
              :class="['tab-btn', { active: showUnpaidModal }]"
              title="Lihat Tagihan Belum Lunas"
            >
              📄 Tagihan <span v-if="unpaidOrders.length > 0" class="badge-count">{{ unpaidOrders.length }}</span>
            </button>
        </div>
        
        <div class="user-profile">
          <div class="avatar">
            {{ user?.name?.charAt(0) || 'U' }}
          </div>
          <span class="username">{{ user?.name || 'Kasir' }}</span>
        </div>
      </div>
    </div>
    
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
      max-width="700px"
    >
        <!-- ORDER INFO INPUTS -->
        <div style="margin-bottom: 2rem;">
           <!-- Takeaway Toggle Moved Here -->
           <div style="display: flex; justify-content: flex-end; margin-bottom: 1rem;">
              <div class="toggle-wrapper" style="background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 2rem; border: 1px solid var(--glass-border);">
                  <label style="cursor: pointer; margin-right: 0.5rem; font-weight: 600; color: var(--color-warning);">Takeaway / Bungkus?</label>
                  <input type="checkbox" v-model="isTakeaway" class="toggle-input" style="cursor: pointer;">
              </div>
           </div>

           <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-bottom: 0.25rem;">Nama Pelanggan / Meja</label>
                <input v-model="customerName" type="text" class="input" placeholder="Nama Pelanggan" style="margin-bottom: 0;">
              </div>
              <div v-if="!isTakeaway">
                <label style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-bottom: 0.25rem;">No. Meja</label>
                <input v-model="tableNumber" type="text" class="input" placeholder="00" style="margin-bottom: 0; text-align: center;">
              </div>
              <div v-else style="display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); border-radius: 0.5rem; border: 1px dashed var(--color-border); color: var(--color-text-muted); font-size: 0.8rem;">
                 Takeaway Mode
              </div>
           </div>
        </div>

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

        <!-- PROMO SELECTOR (CARDS) -->
        <div v-if="activePromos.length > 0" style="margin-bottom: 2rem;">
          <label style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-bottom: 0.5rem; letter-spacing: 0.05em; text-transform: uppercase;">Pilih Promo / Diskon</label>
          
          <div class="promo-grid">
             <div 
               v-for="p in activePromos" 
               :key="p.id" 
               class="promo-card" 
               :class="{ active: selectedPromo?.id === p.id }"
               @click="selectedPromo = selectedPromo?.id === p.id ? null : p"
             >
                <div style="font-weight: 700; font-size: 0.9rem;">{{ p.name }}</div>
                <div style="font-size: 0.8rem; opacity: 0.8;">
                  {{ p.type === 'PERCENT' ? 'Diskon ' + p.value + '%' : 'Potongan Rp ' + p.value.toLocaleString('id-ID') }}
                </div>
                <div v-if="selectedPromo?.id === p.id" style="position: absolute; top: 4px; right: 4px; color: var(--color-primary);">
                   ✓
                </div>
             </div>
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
             <button 
               type="button"
               @click="paymentMethod = 'PAY_LATER'" 
               :class="['payment-btn', { active: paymentMethod === 'PAY_LATER' }]"
               style="grid-column: span 2;"
             >
               <span style="font-size: 1.25rem; margin-right: 0.5rem;">📝</span>
               <span>Bayar Nanti (Open Bill)</span>
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
        <div v-if="paymentMethod === 'PAY_LATER'" style="background: rgba(255,255,0,0.1); border: 1px solid var(--color-warning); padding: 1rem; border-radius: 1rem; margin-bottom: 2rem; display: flex; align-items: flex-start; gap: 0.75rem;">
           <span style="font-size: 1.5rem;">ℹ️</span>
           <div style="font-size: 0.9rem; line-height: 1.5;">
             <strong>Bayar Nanti</strong><br>
             Pesanan akan dicatat sebagai <em>"Belum Dibayar"</em>. Tagihan dapat dilunasi nanti saat pelanggan selesai makan.
           </div>
        </div>

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
        <div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: 1rem;">
           <div class="toggle-wrapper">
              <label>Cetak Struk Otomatis</label>
              <input type="checkbox" v-model="isAutoPrint" class="toggle-input">
           </div>
           <!-- Takeaway moved to top -->
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
             <div>{{ paymentMethod === 'PAY_LATER' ? 'Simpan & Bayar Nanti' : 'Bayar & Simpan' }}</div>
             <div style="font-size: 0.8rem; font-weight: 400; opacity: 0.8;">
               {{ getFooterSubtext() }}
             </div>
           </button>
        </div>
      </template>
    </BaseModal>

    <!-- UNPAID BILLS MODAL -->
    <BaseModal v-model:show="showUnpaidModal" title="Daftar Tagihan (Unpaid)" max-width="600px">
        <div v-if="unpaidOrders.length === 0" style="text-align: center; padding: 2rem; color: var(--color-text-muted);">
            Tidak ada pesanan yang belum dibayar.
        </div>
        <div v-else class="unpaid-list">
             <!-- Group by Table -->
             <div v-for="(group, table) in groupedUnpaidOrders" :key="table" style="margin-bottom: 1.5rem;">
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.25rem;">
                    {{ table === 'undefined' || table === '' ? 'Takeaway / No Table' : 'Meja ' + table }}
                </div>
                
                <div v-for="order in group" :key="order.id" class="unpaid-item" style="margin-bottom: 0.75rem;">
                     <div style="flex: 1;">
                        <div style="font-weight: bold; margin-bottom: 0.25rem;">
                            {{ order.customerName || 'Guest' }}
                        </div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">
                            #{{ order.id }} • {{ new Date(order.createdAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }}
                        </div>
                        <!-- NEW: Show Items -->
                        <div style="font-size: 0.85rem; color: var(--color-text-muted); padding-left: 0.5rem; border-left: 2px solid var(--color-border);">
                            <div v-for="item in order.sales" :key="item.id">
                                {{ item.qty }}x {{ item.menuItem?.name || 'Item' }}
                            </div>
                        </div>
                     </div>
                     <div style="text-align: right; margin-right: 1rem;">
                         <div style="font-weight: 800; font-size: 1.1rem; color: var(--color-warning);">Rp {{ order.totalAmount.toLocaleString('id-ID') }}</div>
                         <div style="font-size: 0.75rem;">{{ order.sales.length }} Item</div>
                     </div>
                     <button @click="openPaymentForUnpaid(order)" class="btn-pay-small" style="background: var(--color-success); border: none; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                         Bayar 💰
                     </button>
                     <button @click="editUnpaidOrder(order)" class="btn-icon" style="margin-left: 0.5rem; border: 1px solid var(--color-warning); color: var(--color-warning); height: 100%; aspect-ratio: 1;" title="Edit Pesanan">
                         ✏️
                     </button>
                 </div>
             </div>
        </div>
    </BaseModal>
    
    <!-- PAY UNPAID BILL MODAL -->
    <BaseModal
      v-model:show="showUnpaidPayModal"
      title="Pembayaran Tagihan"
      :show-cancel="false"
      max-width="500px"
    >
       <div v-if="selectedUnpaidOrder">
           <!-- SUMMARY -->
           <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">
               <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                   <span>Tagihan #{{ selectedUnpaidOrder.id }}</span>
                   <span style="font-weight: bold;">Rp {{ selectedUnpaidOrder.totalAmount.toLocaleString('id-ID') }}</span>
               </div>
               <div style="font-size: 0.9rem; color: var(--color-text-muted);">
                   {{ selectedUnpaidOrder.customerName }} • Meja {{ selectedUnpaidOrder.tableNumber || '-' }}
               </div>
           </div>

            <!-- PAYMENT METHOD -->
            <div style="margin-bottom: 2rem;">
            <label style="font-size: 0.8rem; color: var(--color-text-muted); display: block; margin-bottom: 1rem; letter-spacing: 0.05em; text-transform: uppercase;">Metode Pembayaran</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <button 
                type="button"
                @click="unpaidPaymentMethod = 'Cash'" 
                :class="['payment-btn', { active: unpaidPaymentMethod === 'Cash' }]"
                >
                <span style="font-size: 1.25rem; margin-right: 0.5rem;">💵</span> 
                <span>Tunai</span>
                </button>
                <button 
                type="button"
                @click="unpaidPaymentMethod = 'QRIS'" 
                :class="['payment-btn', { active: unpaidPaymentMethod === 'QRIS' }]"
                >
                <span style="font-size: 1.25rem; margin-right: 0.5rem;">📱</span>
                <span>QRIS</span>
                </button>
            </div>
            </div>

            <!-- CASH INPUT -->
            <Transition name="fade">
            <div v-if="unpaidPaymentMethod === 'Cash'" style="background: rgba(255,255,255,0.02); border-radius: 1.25rem; padding: 1.5rem; border: 1px solid var(--glass-border); margin-bottom: 2rem;">
                <div class="input-group-lg" :class="{ 'error-border': unpaidCashAmount < selectedUnpaidOrder.totalAmount && unpaidCashAmount > 0 }">
                <span class="currency-prefix">Rp</span>
                <input 
                    type="text" 
                    :value="formatCurrencyInput(unpaidCashAmount)" 
                    @input="onUnpaidCashInput"
                    class="input-lg" 
                    placeholder="0"
                >
                </div>
                <!-- Quick Cash Grid -->
                <div class="cash-grid">
                    <button @click="setUnpaidCash('exact')" class="btn-cash-quick accent">Uang Pas</button>
                    <button @click="setUnpaidCash(10000)" class="btn-cash-quick">10rb</button>
                    <button @click="setUnpaidCash(20000)" class="btn-cash-quick">20rb</button>
                    <button @click="setUnpaidCash(50000)" class="btn-cash-quick">50rb</button>
                    <button @click="setUnpaidCash(100000)" class="btn-cash-quick">100rb</button>
                </div>
                <!-- Change -->
                <Transition name="fade">
                <div v-if="unpaidChange > 0" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: var(--color-text-muted);">Kembalian</span>
                    <span style="font-size: 1.5rem; font-weight: 800; color: var(--color-warning);">Rp {{ unpaidChange.toLocaleString('id-ID') }}</span>
                </div>
                </Transition>
            </div>
            </Transition>
       </div>
       <template #footer>
            <div style="display: flex; gap: 1rem; width: 100%;">
            <button @click="showUnpaidPayModal = false" class="btn-footer-secondary">
                Batal
            </button>
            <button 
                @click="submitUnpaidPayment" 
                class="btn-footer-primary"
                :disabled="unpaidPaymentMethod === 'Cash' && unpaidCashAmount < selectedUnpaidOrder?.totalAmount"
            >
                <div>Bayar</div>
                <div style="font-size: 0.8rem; font-weight: 400; opacity: 0.8;">
                   {{ unpaidPaymentMethod === 'Cash' ? (unpaidChange > 0 ? 'Kembalian Rp ' + unpaidChange.toLocaleString('id-ID') : 'Uang Pas') : 'QRIS / Digital' }}
                </div>
            </button>
            </div>
      </template>
    </BaseModal>

    <!-- INCOMING ORDERS MODAL -->
    <BaseModal v-model:show="showIncomingModal" title="Pesanan Masuk (QR)" max-width="600px">
        <div v-if="incomingOrders.length === 0" style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
            <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;">📭</div>
            <p>Belum ada pesanan baru.</p>
        </div>
        
        <div v-else class="incoming-list" style="display: flex; flex-direction: column; gap: 1rem;">
             <div v-for="order in incomingOrders" :key="order.id" class="incoming-card" style="background: rgba(255,255,255,0.03); border-radius: 1rem; padding: 1.25rem; border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 1rem;">
                 <!-- Header -->
                 <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                            <span style="font-weight: 800; font-size: 1.1rem;">{{ order.customerName || 'Pelanggan' }}</span>
                            <span :style="getTableBadgeStyle(order.tableNumber)">
                                {{ formatTableNumber(order.tableNumber) }}
                            </span>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">
                             #{{ order.id }} • {{ new Date(order.createdAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }}
                        </div>
                    </div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: var(--color-primary);">
                        Rp {{ order.totalAmount.toLocaleString('id-ID') }}
                    </div>
                 </div>

                 <!-- Items -->
                 <div style="background: rgba(0,0,0,0.2); border-radius: 0.5rem; padding: 0.75rem;">
                    <div v-for="item in order.sales" :key="item.id" style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.9rem;">
                        <span style="color: #e2e8f0;">{{ item.qty }}x {{ item.menuItem?.name }}</span>
                        <span style="color: var(--color-text-muted);">{{ item.total.toLocaleString() }}</span>
                    </div>
                 </div>
                 
                 <!-- Actions -->
                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem;">
                     <button @click="rejectOrder(order)" style="padding: 0.75rem; border-radius: 0.5rem; border: 1px solid var(--color-danger); color: var(--color-danger); background: transparent; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                         Start Cancel ❌
                     </button>
                     <button @click="acceptOrder(order)" style="padding: 0.75rem; border-radius: 0.5rem; border: none; background: var(--color-success); color: white; font-weight: 700; cursor: pointer; box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3); display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                         Terima Pesanan ✅
                     </button>
                 </div>
             </div>
        </div>
        
        <div style="margin-top: 1.5rem; text-align: center;">
            <button @click="refreshIncoming" class="btn-icon" style="opacity: 0.7; font-size: 0.9rem; background: none; border: none; color: var(--color-text-muted); cursor: pointer;">🔄 Refresh Data</button>
        </div>

        <template #footer>
            <button @click="showIncomingModal = false" style="width: 100%; padding: 0.75rem; background: transparent; border: 1px solid var(--glass-border); color: var(--color-text-muted); border-radius: 0.5rem; cursor: pointer; margin-top: 1rem;">
                Tutup
            </button>
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

// Use /api/orders ? No, listing sales history still useful? 
// Maybe we should list ORDERS instead of SALES in history?
// For now, let's keep sales endpoint for history/charts compatibility, 
// as Order creates Sales.
const { data: sales, refresh: refreshSales } = await useFetch('/api/sales', {
  query: { date: filterDate } 
})

// === UNPAID ORDERS (OPEN BILLS) ===
const { data: unpaidOrdersRaw, refresh: refreshUnpaid } = await useFetch('/api/orders', {
    query: { status: 'PENDING,PROCESS,READY,COMPLETED', limit: 100 }
})

// === INCOMING ORDERS (QR) ===
const { data: incomingOrdersRaw, refresh: refreshIncoming } = await useFetch('/api/orders', {
    query: { status: 'INCOMING', limit: 50 },
    // refresh: 30000 // Auto refresh every 30s
})

const incomingOrders = computed(() => incomingOrdersRaw.value || [])
const showIncomingModal = ref(false)

function viewIncomingOrders() {
    refreshIncoming()
    showIncomingModal.value = true
}

async function acceptOrder(order) {
    try {
        await $fetch(`/api/orders/${order.id}/status`, {
            method: 'PUT',
            body: { status: 'PENDING' } // Move to Pending (Wait for payment) or PROCESS (Direct to Kitchen)?
            // If 'PENDING', it goes to Unpaid Bill list. Ideal for "Pay Later".
            // If 'PROCESS', it goes to Kitchen directly.
            // Let's assume Accept = Confirm Order -> Kitchen. So PROCESS? 
            // But usually needs payment first? if Pay Later, then PROCESS is fine.
        })
        
        // Print Kitchen Ticket? (Not implemented here, usually KDS handles it)
        
        showAlert('Sukses', `Pesanan ${order.customerName} diterima.`)
        refreshIncoming()
        refreshUnpaid() // Updates Unpaid/Process list
    } catch (e) {
        showAlert('Error', e.message)
    }
}

async function rejectOrder(order) {
    showConfirm('Tolak Pesanan?', 'Pesanan ini akan dihapus permanen via ' + order.customerName, async () => {
        try {
            await $fetch('/api/sales', {
                method: 'DELETE',
                body: { transactionId: order.transactionId } // Delete by Transaction ID
            })
            refreshIncoming()
        } catch (e) {
            showAlert('Error', e.message)
        }
    })
}
// Filter only PAY_LATER locally (since API filter logic might iterate status only? 
// Actually current API only filters status. Let's filter client side for now.
const unpaidOrders = computed(() => {
    return unpaidOrdersRaw.value?.filter(o => o.paymentMethod === 'PAY_LATER') || []
})

const groupedUnpaidOrders = computed(() => {
    const groups = {}
    unpaidOrders.value.forEach(order => {
        const table = order.tableNumber || ''
        if (!groups[table]) groups[table] = []
        groups[table].push(order)
    })
    return groups
})

// Main View Tabs: 'Cart' (default) vs 'Unpaid' (optional? No, Unpaid is modal)
const showUnpaidModal = ref(false)
const showUnpaidPayModal = ref(false)
const selectedUnpaidOrder = ref(null)
const unpaidPaymentMethod = ref('Cash')
const unpaidCashAmount = ref(0) // Separate cash state for unpaid flow

const unpaidChange = computed(() => {
    if (!selectedUnpaidOrder.value || unpaidPaymentMethod.value !== 'Cash') return 0
    return Math.max(0, unpaidCashAmount.value - selectedUnpaidOrder.value.totalAmount)
})

function formatCurrencyInput(value) {
  if (!value) return ''
  return new Intl.NumberFormat('id-ID').format(value)
}

function onUnpaidCashInput(event) {
  const rawValue = event.target.value.replace(/\D/g, '')
  unpaidCashAmount.value = rawValue ? parseInt(rawValue, 10) : 0
}

function setUnpaidCash(amount) {
   if (!selectedUnpaidOrder.value) return
   if (amount === 'exact') {
       unpaidCashAmount.value = selectedUnpaidOrder.value.totalAmount
   } else {
       unpaidCashAmount.value = amount
   }
}

function openPaymentForUnpaid(order) {
    selectedUnpaidOrder.value = order
    unpaidCashAmount.value = 0
    unpaidPaymentMethod.value = 'Cash'
    showUnpaidModal.value = false // Close list
    showUnpaidPayModal.value = true // Open pay
}

async function submitUnpaidPayment() {
    if (!selectedUnpaidOrder.value) return 
    
    try {
        await $fetch(`/api/orders/${selectedUnpaidOrder.value.id}/pay`, {
            method: 'POST',
            body: { 
                paymentMethod: unpaidPaymentMethod.value,
                amountPaid: unpaidCashAmount.value 
            }
        })

        // Print Updated Receipt
        if (isAutoPrint.value) {
             printTransaction({
                id: selectedUnpaidOrder.value.transactionId, // Keep original Transaction ID
                date: new Date(),
                total: selectedUnpaidOrder.value.totalAmount,
                paymentMethod: unpaidPaymentMethod.value,
                cashProvided: unpaidCashAmount.value,
                change: unpaidChange.value,
                cashier: user.value?.name || 'Barista',
                customerName: selectedUnpaidOrder.value.customerName, 
                tableNumber: selectedUnpaidOrder.value.tableNumber,
                items: selectedUnpaidOrder.value.sales.map(s => ({
                    name: s.menuItem.name,
                    qty: s.qty,
                    total: s.total
                }))
            })
        }

        showAlert('Sukses', 'Pembayaran berhasil dikonfirmasi.')
        showUnpaidPayModal.value = false
        refreshUnpaid()
        refreshSales() // Update history status
    } catch (e) {
        showAlert('Error', e.message)
    }
}


import { useNetwork } from '@vueuse/core'
import { db } from '~/utils/db'

const { isOnline } = useNetwork()
const { user, isOwner } = useAuth()

// Shift Check
const { data: activeShift } = await useFetch('/api/shifts/active')
const isShiftOpen = computed(() => !!activeShift.value || isOwner.value) 

const activeView = ref('POS')

// Group Sales by Transaction ID for History List
const groupedSales = computed(() => {
  if (!sales.value) return []
  
  const groups = {}
  sales.value.forEach(sale => {
    // Legacy support + Order support ?
    // If orderId is present, we might want to fetch Order details? 
    // Sales point of view: it still has transactionId.
    const key = sale.transactionId || `single-${sale.id}`
    
    if (!groups[key]) {
        // Find if this SALE belongs to an OPEN BILL? 
        // We now filter out PAY_LATER from History. It lives in Unpaid Tab.
        if (sale.paymentMethod === 'PAY_LATER') {
             // Skip this sale from History List
             return
        }
        
        // We know from sales list we fetched, these are SALES. 
        // If pay later, paymentMethod is PAY_LATER.
        
      groups[key] = {
        id: key,
        displayId: sale.transactionId ? `#${sale.id}` : `#${sale.id}`, 
        date: sale.date,
        total: 0,
        paymentMethod: sale.paymentMethod, // Will be PAY_LATER if updated
        // Capture Customer Info from Order if available (New Backend Feature)
        customerName: sale.order?.customerName || '',
        tableNumber: sale.order?.tableNumber || '',
        items: []
      }
    }
    
    groups[key].items.push({
      name: sale.menuItem?.name || 'Unknown',
      qty: sale.qty,
      price: sale.priceSnapshot,
      total: sale.total,
      id: sale.id 
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

function formatTableNumber(table) {
    if (!table) return 'Meja ?'
    if (table === 'DINE_IN') return 'Makan di Tempat'
    if (table === 'TAKEAWAY') return 'Takeaway'
    if (table === 'DELIVERY') return 'Delivery'
    return `Meja ${table}`
}

function getTableBadgeStyle(table) {
    const base = "font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 600; "
    if (table === 'TAKEAWAY') return base + "background: var(--color-warning); color: black;"
    if (table === 'DELIVERY') return base + "background: #3b82f6; color: white;" // Blue for delivery
    return base + "background: var(--color-primary); color: white;"
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
const activePromos = computed(() => promos.value?.filter(p => p.isActive) || [])
const showCartDrawer = ref(false)
const showItemsDetail = ref(false)

// NEW: Order Details
const customerName = ref('')
const tableNumber = ref('')

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

function onCashInput(event) {
  const rawValue = event.target.value.replace(/\D/g, '')
  cashAmount.value = rawValue ? parseInt(rawValue, 10) : 0
}

watch(showCartDrawer, (val) => {
  if (val) {
    cashAmount.value = 0 
    if (!customerName.value) customerName.value = '' // Reset if needed, but maybe keep persistent if closed accidentally? 
    // Let's keep data if just closing drawer without Success.
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
      customerName.value = ''
      tableNumber.value = ''
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

function getFooterSubtext() {
    if (paymentMethod.value === 'PAY_LATER') {
        return 'Status Order: Pending'
    } else if (paymentMethod.value === 'Cash') {
        return change.value > 0 ? 'Kembalian Rp ' + change.value.toLocaleString('id-ID') : 'Uang Pas'
    }
    return 'QRIS / Digital'
}

async function submitTransaction() {
  if (cart.value.length === 0) return
  
  const finalTotal = Math.max(0, cartTotal.value - discountAmount.value)
  
  if (paymentMethod.value === 'Cash' && cashAmount.value < finalTotal) {
    showAlert('Pembayaran Kurang', 'Nominal uang tunai kurang dari total tagihan.')
    return
  }
  
  const currentCart = [...cart.value]
  const currentTotal = cartTotal.value
  const currentDiscount = discountAmount.value
  const currentPayment = paymentMethod.value
  const currentCash = cashAmount.value
  const currentChange = change.value
  const currentCustomer = customerName.value || 'Guest'
  const currentTable = tableNumber.value || ''

  try {
    let response = null // Response is object now { success: true, order: ... }
    
    if (isOnline.value) {
      // NEW: Use /api/orders
      response = await $fetch('/api/orders', {
        method: 'POST',
        body: {
          items: cart.value.map(i => ({ menuItemId: i.menuItemId, qty: i.qty })),
          paymentMethod: paymentMethod.value,
          isTakeaway: isTakeaway.value,
          promoId: selectedPromo.value?.id,
          discountAmount: discountAmount.value,
          customerName: currentCustomer,
          tableNumber: currentTable
        }
      })
    } else {
      if (paymentMethod.value === 'PAY_LATER') {
          showAlert('Offline', 'Mode offline tidak mendukung Bayar Nanti. Gunakan Cash.')
          return
      }

      // Offline Mode for Cash/QRIS
      showAlert('Offline', 'Mode offline untuk Pesanan belum didukung penuh. Menggunakan mode darurat.')
      // ... Fallback logic ...
      return
    }
    
    // Auto Print (Only if NOT Pay Later, or print Kitchen Copy? Let's just print receipt "UNPAID")
    // If Pay Later, maybe we want to print a "Bill" ?
    // Auto Print (Only if NOT Pay Later)
    if (isAutoPrint.value && response && response.success && currentPayment !== 'PAY_LATER') {
      const trxId = response.order.transactionId
      
      printTransaction({
        id: trxId,
        date: new Date(),
        total: Math.max(0, currentTotal - currentDiscount),
        paymentMethod: currentPayment === 'PAY_LATER' ? 'TAGIHAN (BELUM LUNAS)' : currentPayment,
        cashProvided: currentPayment === 'Cash' ? currentCash : 0,
        change: currentPayment === 'Cash' ? currentChange : 0,
        cashier: user.value?.name || 'Barista',
        customerName: currentCustomer, 
        tableNumber: currentTable,     
        items: currentCart.map(i => ({
          name: i.name,
          qty: i.qty,
          total: i.total
        }))
      })
    }
    
    // Success
    cart.value = []
    customerName.value = ''
    tableNumber.value = ''
    isTakeaway.value = false
    selectedPromo.value = null
    showCartDrawer.value = false
    
    // Refresh Logic
    if (isOnline.value) {
        refreshSales() // Refresh history
        refreshUnpaid() // Refresh open bills if pay later
    }

    if (currentPayment === 'PAY_LATER') {
        showAlert('Berhasil', 'Pesanan disimpan ke Daftar Tagihan.')
    } else {
        showAlert('Berhasil', 'Transaksi berhasil disimpan.')
    }

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
        
        // Restore Customer & Table (New Feature)
        if (trx.customerName) customerName.value = trx.customerName
        if (trx.tableNumber) tableNumber.value = trx.tableNumber

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

function editUnpaidOrder(order) {
     showConfirm(
        'Edit Pesanan Tagihan?',
        'Pesanan ini akan DIHAPUS sementara dan item dikembalikan ke keranjang untuk diedit. Lanjutkan?',
        async () => {
             try {
                 // 1. Restore to Cart
                 cart.value = order.sales.map(s => ({
                   menuItemId: s.menuItemId,
                   name: s.menuItem?.name || 'Item',
                   qty: s.qty,
                   price: s.priceSnapshot,
                   total: s.total
                 }))
                 
                 // 2. Restore Details
                 customerName.value = order.customerName
                 tableNumber.value = order.tableNumber
                 paymentMethod.value = 'PAY_LATER' // Default back to Pay Later logic
                 
                 // 3. Delete Old Order (Cascade delete sales)
                 await $fetch('/api/sales', {
                     method: 'DELETE',
                     body: { transactionId: order.transactionId }
                 })
                 
                 // 4. UI Updates
                 showUnpaidModal.value = false // Close modal to show cart
                 refreshUnpaid() // Refresh list
                 refreshSales() // Refresh history (though not there anyway)
                 
                 showAlert('Mode Edit', 'Silahkan tambah/ubah pesanan, lalu Simpan lagi.')
                 
             } catch (e) {
                 showAlert('Error', e.message)
             }
        }
     )
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
  grid-template-columns: 1fr;
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

/* NEW HEADER STYLES */
.pos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0;
}

@media (max-width: 640px) {
  .pos-header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .header-left, .header-right {
    width: 100%;
    justify-content: space-between;
  }
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.shift-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  background: rgba(255,255,255,0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  border: 1px solid var(--glass-border);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--color-success);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.view-tabs {
  display: flex;
  background: rgba(0,0,0,0.3);
  padding: 4px;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--color-text-muted);
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.tab-btn:hover {
  color: white;
  background: rgba(255,255,255,0.05);
}

.tab-btn.active {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 4px 12px -2px var(--color-primary-glow);
}

.badge-count {
  background: var(--color-danger);
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
  line-height: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.35rem 0.5rem 0.35rem 0.35rem; /* Left padding small for avatar */
  background: rgba(255,255,255,0.03);
  border-radius: 2rem;
  border: 1px solid var(--glass-border);
  cursor: pointer;
  transition: all 0.2s;
}

.user-profile:hover {
  background: rgba(255,255,255,0.08);
  border-color: var(--color-border);
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), #6366f1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.username {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  padding-right: 0.75rem;
}

/* Promo Card Styles */
.promo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}

.promo-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--glass-border);
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.promo-card:hover {
  background: rgba(255,255,255,0.08);
}

.promo-card.active {
  background: rgba(59, 130, 246, 0.15);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}
</style>
