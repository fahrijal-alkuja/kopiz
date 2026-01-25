<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>Master Menu & Resep</h1>
      <div style="display: flex; gap: 0.5rem; background: var(--color-bg); padding: 0.25rem; border-radius: 0.5rem;">
        <button @click="view = 'list'" :class="['btn', view === 'list' ? '' : 'btn-text']" style="padding: 0.5rem 1rem;">Daftar Menu</button>
        <button @click="view = 'margin'" :class="['btn', view === 'margin' ? '' : 'btn-text']" style="padding: 0.5rem 1rem;">Analisis Margin</button>
      </div>
    </div>

    <div v-if="view === 'list'" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <!-- ... existing grid content ... -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h3 style="margin: 0;">Daftar Menu</h3>
          <button @click="openMenuModal" class="btn btn-primary" style="padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.85rem;">+ Tambah Menu</button>
        </div>
        <div style="display: flex; gap: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem; scrollbar-width: none; padding-bottom: 5px;">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategoryFilter = cat"
            :class="['btn', selectedCategoryFilter === cat ? 'btn-primary' : '']"
            :style="selectedCategoryFilter !== cat ? { background: 'var(--color-surface-soft)', color: 'var(--color-text-muted)' } : {}"
            style="padding: 0.4rem 1rem; border-radius: 2rem; white-space: nowrap; font-size: 0.85rem;"
          >
            {{ cat }}
          </button>
        </div>

        <div class="table-container">
          <table v-if="filteredItems && filteredItems.length > 0">
            <thead>
              <tr>
                <th>Nama Menu</th>
                <th style="width: 100px;">Kategori</th>
                <th style="text-align: right; width: 100px; white-space: nowrap;">Harga</th>
                <th style="width: 160px; text-align: right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in filteredItems" :key="item.id" :style="{ background: selectedItem?.id === item.id ? 'var(--color-primary-glow)' : 'transparent' }">
                <td style="font-weight: 500; min-width: 150px;">{{ item.name }}</td>
                <td><span class="badge" style="background: rgba(255,255,255,0.05); font-size: 0.75rem;">{{ item.category }}</span></td>
                <td style="text-align: right; white-space: nowrap;">Rp {{ item.price.toLocaleString('id-ID') }}</td>
                <td style="display: flex; gap: 0.5rem; justify-content: flex-end; white-space: nowrap;">
                  <button @click="editMenu(item)" class="btn-icon" title="Edit">✏️</button>
                  <button @click="selectForRecipe(item)" class="btn" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; background: var(--color-warning);">Resep</button>
                  <button @click="deleteItem(item.id)" class="btn btn-danger" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>

      <!-- RECIPE SECTION -->
      <div class="card">
        <div v-if="selectedItem">
          <div v-if="selectedItem.isRetail" style="text-align: center; padding: 2rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📦</div>
            <h3 style="color: var(--color-primary);">Mode Jual Langsung</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">
              Item ini diatur untuk memotong stok 1:1 dari inventaris <br>
              <strong>({{ selectedItem.material?.name || 'Bahan Tertaut' }})</strong>. <br>
              Anda tidak perlu mengatur resep manual.
            </p>
            <button @click="editMenu(selectedItem)" class="btn" style="margin-top: 1rem; background: transparent; border: 1px solid var(--color-border);">Ubah Mode Stok</button>
          </div>
          <div v-else>
            <h3>Resep: {{ selectedItem.name }}</h3>
            <p style="font-size: 0.8rem; color: var(--color-text-muted);">Tentukan bahan baku yang berkurang setiap menu ini terjual.</p>
            
            <div v-if="currentRecipes && currentRecipes.length > 0" style="margin-bottom: 2rem;">
              <div class="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Bahan</th>
                      <th>Jumlah</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="r in currentRecipes" :key="r.id">
                      <td>{{ r.material?.name }}</td>
                      <td>{{ r.quantity }} {{ r.material?.unit }}</td>
                      <td><button @click="removeRecipeItem(r.id)" style="color: var(--color-danger); background: none; border:none; cursor:pointer; padding: 10px; font-size: 1.25rem;">&times;</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style="background: var(--color-bg); padding: 1rem; border-radius: 0.5rem;">
              <label>Tambah Bahan ke Resep</label>
              <select v-model="recipeForm.materialId" class="select">
                 <option value="" disabled>Pilih Bahan</option>
                 <option v-for="m in materials" :key="m.id" :value="m.id">{{ m.name }} ({{ m.unit }})</option>
              </select>
              
              <label>Jumlah Digunakan</label>
              <div style="display: flex; gap: 0.5rem; align-items: center;">
                <input v-model="recipeForm.quantity" type="number" step="0.01" class="input" style="margin-bottom: 0;">
                <span>{{ selectedMaterialUnit }}</span>
              </div>
              <div v-if="isCoffeeItem" style="font-size: 0.8rem; color: var(--color-primary); margin: 0.5rem 0;">
                *SOP Kopi: Disarankan 18 gram.
              </div>

              <button @click="addRecipeItem" class="btn" style="width: 100%; margin-top: 1rem;">Tambah Bahan</button>
            </div>
          </div>
        </div>
        <div v-else style="display: flex; height: 100%; align-items: center; justify-content: center; text-align: center; color: var(--color-text-muted);">
          Pilih menu di sebelah kiri untuk mengatur resep atau mode stok.
        </div>
      </div>
    </div>

    <!-- MARGIN VIEW -->
    <div v-else class="card">
      <h3>Analisis Keuntungan per Produk</h3>
      <div class="table-container">
        <table v-if="margins && margins.length > 0">
          <thead>
            <tr>
              <th>Menu</th>
              <th style="text-align: right;">Harga Jual</th>
              <th style="text-align: right;">Estimasi HPP</th>
              <th style="text-align: right;">Laba (Rp)</th>
              <th style="text-align: right;">Laba (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in margins" :key="m.id">
              <td>{{ m.name }}</td>
              <td style="text-align: right;">Rp {{ m.price.toLocaleString() }}</td>
              <td style="text-align: right; color: var(--color-warning);">Rp {{ m.hpp.toLocaleString() }}</td>
              <td style="text-align: right; color: var(--color-success); font-weight: bold;">Rp {{ m.margin.toLocaleString() }}</td>
              <td style="text-align: right;">
                <span class="badge" :style="{ background: m.marginPercent > 50 ? 'var(--color-success)' : 'var(--color-warning)' }">
                  {{ m.marginPercent }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Menu Form Modal -->
    <BaseModal
      v-model:show="showMenuModal"
      :title="isEditingMenu ? 'Edit Menu' : 'Tambah Menu Baru'"
      :show-cancel="true"
      :confirm-text="isEditingMenu ? 'Simpan Perubahan' : 'Simpan Menu'"
      @confirm="handleSubmit"
    >
      <div style="padding: 1rem 0;">
        <label>Nama Menu</label>
        <input v-model="form.name" type="text" class="input" required placeholder="Contoh: Kopi Susu">
        <label>Kategori</label>
        <select v-model="form.category" class="select" required>
          <option value="Minuman">Minuman</option>
          <option value="Makanan">Makanan</option>
          <option value="Snack">Snack</option>
          <option value="Roti">Roti</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        <label>Harga</label>
        <input v-model="form.price" type="number" class="input" required placeholder="0">

        <!-- Direct Sell / Retail Toggle -->
        <div style="margin: 1rem 0; padding: 1rem; background: rgba(59, 130, 246, 0.05); border-radius: 0.5rem; border: 1px solid rgba(59, 130, 246, 0.1);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <input type="checkbox" v-model="form.isRetail" id="isRetail" style="width: 1.2rem; height: 1.2rem; cursor: pointer;">
            <label for="isRetail" style="font-weight: bold; cursor: pointer; margin: 0;">Jual Langsung (Mode Retail)</label>
          </div>
          <p style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">Aktifkan jika item ini adalah barang jadi (seperti roti) yang dibeli dan langsung dijual tanpa racikan resep.</p>
          
          <div v-if="form.isRetail">
            <label style="font-size: 0.8rem;">Hubungkan ke Stok Inventaris</label>
            <select v-model="form.materialId" class="select" required>
              <option value="" disabled>Pilih Stok</option>
              <option v-for="m in materials" :key="m.id" :value="m.id">{{ m.name }} ({{ m.unit }})</option>
            </select>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script setup>
const view = ref('list') // 'list' or 'margin'
const { data: items, refresh } = await useFetch('/api/menu')
const { data: materials } = await useFetch('/api/inventory')
const { data: margins, refresh: refreshMargins } = await useFetch('/api/menu/margin', {
  lazy: true,
  watch: [view]
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

// Category Filter & Search Logic
const selectedCategoryFilter = ref('Semua')
const categories = computed(() => {
  if (!items.value) return ['Semua']
  const cats = new Set(items.value.map(i => i.category))
  return ['Semua', ...Array.from(cats).sort()]
})

const filteredItems = computed(() => {
  if (!items.value) return []
  if (selectedCategoryFilter.value === 'Semua') return items.value
  return items.value.filter(i => i.category === selectedCategoryFilter.value)
})

const showMenuModal = ref(false)
const isEditingMenu = ref(false)
const form = ref({ id: null, name: '', category: 'Minuman', price: '', isRetail: false, materialId: '' })

function openMenuModal() {
  resetForm()
  showMenuModal.value = true
}

const recipeForm = ref({ materialId: '', quantity: 1 })
const selectedItem = ref(null)

const { data: currentRecipes, refresh: refreshRecipes } = await useFetch('/api/menu/recipe', {
  query: { menuItemId: computed(() => selectedItem.value?.id) },
  watch: [selectedItem]
})

const isCoffeeItem = computed(() => {
  if (!selectedItem.value) return false
  return selectedItem.value.name.toLowerCase().includes('kopi') || selectedItem.value.name.toLowerCase().includes('americano')
})

const selectedMaterialUnit = computed(() => {
  const m = materials.value?.find(m => m.id === recipeForm.value.materialId)
  return m ? m.unit : ''
})

function selectForRecipe(item) {
  selectedItem.value = item
  recipeForm.value.materialId = ''
  recipeForm.value.quantity = isCoffeeItem.value ? 18 : 1
}

function resetForm() {
  isEditingMenu.value = false
  form.value = { id: null, name: '', category: 'Minuman', price: '', isRetail: false, materialId: '' }
}

function editMenu(item) {
  isEditingMenu.value = true
  form.value = { 
    id: item.id, 
    name: item.name, 
    category: item.category, 
    price: item.price,
    isRetail: item.isRetail || false,
    materialId: item.materialId || ''
  }
  showMenuModal.value = true
}

async function handleSubmit() {
  try {
    const payload = {
      ...form.value,
      materialId: form.value.isRetail ? form.value.materialId : null
    }

    if (isEditingMenu.value) {
      await $fetch(`/api/menu/${form.value.id}`, { 
        method: 'PUT', 
        body: payload 
      })
      showAlert('Berhasil', 'Menu telah diperbarui.')
    } else {
      await $fetch('/api/menu', { 
        method: 'POST', 
        body: payload 
      })
      showAlert('Berhasil', 'Menu baru telah ditambahkan.')
    }
    showMenuModal.value = false
    resetForm()
    refresh()
  } catch (e) {
    showAlert('Error', e.message)
  }
}

async function deleteItem(id) {
  showConfirm(
    'Konfirmasi Hapus',
    'Hapus menu ini dari daftar master? Resep yang terkait juga akan terhapus.',
    async () => {
      try {
        await $fetch(`/api/menu/${id}`, { method: 'DELETE' })
        if (selectedItem.value?.id === id) selectedItem.value = null
        refresh()
      } catch (e) {
        showAlert('Error', e.message)
      }
    }
  )
}

async function addRecipeItem() {
  if (!recipeForm.value.materialId) return
  try {
    await $fetch('/api/menu/recipe', {
      method: 'POST',
      body: {
        menuItemId: selectedItem.value.id,
        materialId: recipeForm.value.materialId,
        quantity: recipeForm.value.quantity
      }
    })
    refreshRecipes()
  } catch (e) {
    showAlert('Error', e.message)
  }
}

async function removeRecipeItem(id) {
  try {
    await $fetch('/api/menu/recipe', { method: 'DELETE', body: { id } })
    refreshRecipes()
  } catch (e) {
    showAlert('Error', e.message)
  }
}
</script>

<style scoped>
.btn-danger {
  background: var(--color-danger);
  color: white;
}
</style>

