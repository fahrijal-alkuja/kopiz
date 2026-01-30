<script setup>
const { data: materials, refresh } = await useFetch('/api/inventory')
const { isOwner } = useAuth()

// Modal State
const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: false,
  confirmText: 'OK',
  onConfirm: () => {}
})

function showAlert(title, message) {
  modal.value = {
    show: true,
    title,
    message,
    showCancel: false,
    confirmText: 'OK',
    onConfirm: () => {}
  }
}

const form = ref({
  name: '',
  unit: 'gram',
  stock: '',
  totalValue: '', // New field for initial value
  minStock: 100,
  costPerUnit: ''
})

watch(() => [form.value.totalValue, form.value.stock], () => {
  const total = parseFloat(form.value.totalValue)
  const qty = parseFloat(form.value.stock)
  if (total && qty) {
    form.value.costPerUnit = (total / qty).toFixed(2)
  }
})

const editingId = ref(null)

// History State
const history = ref({
  material: null,
  logs: []
})

async function fetchHistory(m) {
  try {
    history.value.material = m
    history.value.logs = await $fetch(`/api/inventory/history?materialId=${m.id}`)
  } catch (e) {
    showAlert('Error', 'Gagal mengambil riwayat mutasi.')
  }
}

// Purchase & Waste state
const purchaseModal = ref({
  show: false,
  material: null,
  quantity: '',
  totalPrice: '', // New field
  pricePerUnit: '',
  supplier: ''
})

watch(() => [purchaseModal.value.totalPrice, purchaseModal.value.quantity], () => {
  const total = parseFloat(purchaseModal.value.totalPrice)
  const qty = parseFloat(purchaseModal.value.quantity)
  if (total && qty) {
    purchaseModal.value.pricePerUnit = (total / qty).toFixed(2)
  }
})

const wasteModal = ref({
  show: false,
  material: null,
  quantity: '',
  reason: ''
})

function openPurchaseModal(m) {
  purchaseModal.value = {
    show: true,
    material: m,
    quantity: '',
    totalPrice: '',
    pricePerUnit: m.costPerUnit,
    supplier: ''
  }
}

function openWasteModal(m) {
  wasteModal.value = {
    show: true,
    material: m,
    quantity: '',
    reason: ''
  }
}

async function submitPurchase() {
  try {
    if (!purchaseModal.value.quantity) return
    await $fetch('/api/inventory/purchase', {
      method: 'POST',
      body: {
        materialId: purchaseModal.value.material.id,
        quantity: parseFloat(purchaseModal.value.quantity),
        pricePerUnit: parseFloat(purchaseModal.value.pricePerUnit),
        supplier: purchaseModal.value.supplier
      }
    })
    purchaseModal.value.show = false
    refresh()
  } catch (e) {
    showAlert('Error', 'Gagal menyimpan pembelian: ' + e.message)
  }
}

async function submitWaste() {
  try {
    if (!wasteModal.value.quantity) return
    await $fetch('/api/inventory/waste', {
      method: 'POST',
      body: {
        materialId: wasteModal.value.material.id,
        quantity: parseFloat(wasteModal.value.quantity),
        reason: wasteModal.value.reason
      }
    })
    wasteModal.value.show = false
    refresh()
  } catch (e) {
    showAlert('Error', 'Gagal menyimpan waste: ' + e.message)
  }
}

function confirmDelete(m) {
  modal.value = {
    show: true,
    title: 'Konfirmasi Hapus',
    message: `Hapus bahan "${m.name}"? Semua data mutasi stok terkait juga akan dihapus.`,
    showCancel: true,
    confirmText: 'Hapus',
    onConfirm: async () => {
      try {
        await $fetch('/api/inventory', {
          method: 'DELETE',
          body: { id: m.id }
        })
        modal.value.show = false
        refresh()
        if (history.value.material?.id === m.id) {
          history.value.material = null
        }
      } catch (e) {
        showAlert('Error', 'Gagal menghapus material: ' + e.message)
      }
    }
  }
}

const materialModal = ref({
  show: false
})

function openAddModal() {
  resetForm()
  materialModal.value.show = true
}

async function saveMaterial() {
  try {
    const method = editingId.value ? 'PUT' : 'POST'
    const body = editingId.value ? { ...form.value, id: editingId.value } : form.value

    await $fetch('/api/inventory', {
      method,
      body
    })
    
    resetForm()
    materialModal.value.show = false
    refresh()
  } catch (e) {
    showAlert('Error', e.message)
  }
}

function editMaterial(m) {
  editingId.value = m.id
  form.value = {
    name: m.name,
    unit: m.unit,
    stock: m.stock,
    minStock: m.minStock,
    costPerUnit: m.costPerUnit,
    totalValue: ''
  }
  materialModal.value.show = true
}

function resetForm() {
  editingId.value = null
  form.value = {
    name: '',
    unit: 'gram',
    stock: '',
    totalValue: '',
    minStock: 100,
    costPerUnit: ''
  }
}
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1>Manajemen Stok & Bahan Baku</h1>
        <button v-if="isOwner" @click="openAddModal" class="btn">
           + Tambah Material
        </button>
    </div>

    <!-- List Material -->
    <div class="card">
    <div v-if="materials && materials.length > 0" class="table-container">
        <table>
        <thead>
            <tr>
            <th>Nama</th>
            <th>Stok</th>
            <th style="text-align: right;">Min. Stok</th>
            <th style="text-align: right;">Biaya/Unit</th>
            <th style="text-align: right;" :style="{ width: isOwner ? '180px' : '100px' }">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="m in materials" :key="m.id">
            <td>{{ m.name }}</td>
            <td :style="{ color: m.stock < m.minStock ? 'var(--color-danger)' : 'inherit', fontWeight: m.stock < m.minStock ? 'bold' : 'normal' }">
                {{ m.stock.toLocaleString() }} {{ m.unit }}
                <span v-if="m.stock < m.minStock" style="font-size: 0.7rem; display: block;">⚠️ Stok Rendah</span>
            </td>
            <td style="text-align: right;">{{ m.minStock.toLocaleString() }}</td>
            <td style="text-align: right;">Rp {{ m.costPerUnit.toLocaleString('id-ID') }}</td>
            <td style="text-align: right; white-space: nowrap;">
                <button v-if="isOwner" @click="editMaterial(m)" class="btn-icon" title="Edit">✏️</button>
                <button @click="openPurchaseModal(m)" class="btn-icon" style="color: var(--color-success);" title="Beli Stok">🛒</button>
                <button @click="openWasteModal(m)" class="btn-icon" style="color: var(--color-warning);" title="Waste/Rusak">💥</button>
                <button @click="fetchHistory(m)" class="btn-icon" style="color: var(--color-primary);" title="Riwayat">📜</button>
                <button v-if="isOwner" @click="confirmDelete(m)" class="btn-icon" style="color: #ef4444;" title="Hapus">🗑️</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    <div v-else style="text-align: center; color: var(--color-text-muted); padding: 2rem;">
        Belum ada bahan baku terdaftar.
    </div>
    </div>

    <!-- Riwayat Stok (Mutasi) -->
    <div v-if="history.material" class="card" style="margin-top: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3>Riwayat Mutasi: {{ history.material.name }}</h3>
        <button @click="history.material = null" class="btn" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">Tutup</button>
      </div>
      
      <div v-if="history.logs && history.logs.length > 0" class="table-container">
        <table>
          <thead>
            <tr>
              <th>Waktu</th>
              <th>Tipe</th>
              <th style="text-align: right;">Jumlah</th>
              <th style="text-align: right;">Saldo Akhir</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in history.logs" :key="log.id">
              <td>{{ new Date(log.createdAt).toLocaleString('id-ID') }}</td>
              <td>
                <span :class="['badge', log.type === 'IN' ? 'badge-in' : 'badge-out']">
                  {{ log.type === 'IN' ? 'MASUK' : (log.type === 'OUT' ? 'KELUAR' : (log.type === 'WASTE' ? 'WASTE' : 'ADJUST')) }}
                </span>
              </td>
              <td style="text-align: right;">
                {{ (log.type === 'OUT' || log.type === 'WASTE') ? '-' : '+' }}{{ log.quantity.toLocaleString() }}
              </td>
              <td style="text-align: right;">{{ log.balanceAfter.toLocaleString() }}</td>
              <td>{{ log.reason }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else style="padding: 1rem; text-align: center; color: var(--color-text-muted);">
        Belum ada catatan mutasi untuk bahan ini.
      </div>
    </div>

    <!-- Alert Modal -->
    <BaseModal
      v-model:show="modal.show"
      :title="modal.title"
      :message="modal.message"
      :show-cancel="modal.showCancel"
      :confirm-text="modal.confirmText"
      @confirm="modal.onConfirm"
    />

    <!-- Add/Edit Material Modal -->
    <BaseModal
      v-model:show="materialModal.show"
      :title="editingId ? 'Edit Material' : 'Tambah Material Baru'"
      :confirm-text="editingId ? 'Simpan Perubahan' : 'Tambah'"
      :show-cancel="true"
      @confirm="saveMaterial"
    >
        <div style="padding: 1rem 0;">
            <label>Nama Bahan</label>
            <input v-model="form.name" type="text" class="input" required placeholder="Contoh: Biji Kopi, Susu, Gula">
            
            <label>Satuan</label>
            <select v-model="form.unit" class="select" required>
            <option value="gram">Gram (gr)</option>
            <option value="ml">Mililiter (ml)</option>
            <option value="pcs">Pcs / Biji</option>
            </select>

            <label>Stok Saat Ini (Awal)</label>
            <input v-model="form.stock" type="number" step="0.01" class="input" required placeholder="0">

            <div v-if="!editingId">
                <label>Total Nilai Stok Awal (Rp)</label>
                <input v-model="form.totalValue" type="number" class="input" placeholder="Contoh: 150000">
            </div>

            <label>Harga per Satuan (Rp)</label>
            <input v-model="form.costPerUnit" type="number" step="0.01" class="input" required placeholder="Contoh: 250">
            
            <label>Stok Minimum (Alert)</label>
            <input v-model="form.minStock" type="number" step="0.01" class="input" required placeholder="Contoh: 100">
            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">
            *Muncul peringatan jika stok di bawah nilai ini.
            </div>
        </div>
    </BaseModal>

    <!-- Purchase Modal -->
    <BaseModal
      v-model:show="purchaseModal.show"
      :title="'Beli Stok: ' + purchaseModal.material?.name"
      :confirm-text="'Simpan Pembelian'"
      :show-cancel="true"
      @confirm="submitPurchase"
    >
      <div style="padding: 1rem 0;">
        <label>Jumlah dibeli ({{ purchaseModal.material?.unit }})</label>
        <input v-model="purchaseModal.quantity" type="number" step="0.01" class="input" placeholder="0">
        
        <label>Total Harga Bayar (Rp)</label>
        <input v-model="purchaseModal.totalPrice" type="number" class="input" placeholder="Contoh: 300000">
        
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem; border: 1px dashed var(--color-border);">
          <div class="label" style="margin-bottom: 0;">Harga per {{ purchaseModal.material?.unit }}:</div>
          <div style="font-weight: bold; font-size: 1.2rem; color: var(--color-success);">
            Rp {{ Number(purchaseModal.pricePerUnit).toLocaleString('id-ID') }}
          </div>
        </div>
        
        <label style="margin-top: 1rem;">Supplier / Toko</label>
        <input v-model="purchaseModal.supplier" type="text" class="input" placeholder="Contoh: Toko Berkah">
      </div>
    </BaseModal>

    <!-- Waste Modal -->
    <BaseModal
      v-model:show="wasteModal.show"
      :title="'Catat Waste: ' + wasteModal.material?.name"
      :confirm-text="'Simpan Waste'"
      :show-cancel="true"
      @confirm="submitWaste"
    >
      <div style="padding: 1rem 0;">
        <label>Jumlah ({{ wasteModal.material?.unit }})</label>
        <input v-model="wasteModal.quantity" type="number" class="input" placeholder="0">
        
        <label>Alasan / Keterangan</label>
        <input v-model="wasteModal.reason" type="text" class="input" placeholder="Contoh: Basi, Tumpah, Expired">
      </div>
    </BaseModal>
  </div>
</template>

<style scoped>
.btn-danger {
  background: var(--color-danger);
  color: white;
}

.badge {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-in {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.badge-out {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.btn-icon:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
