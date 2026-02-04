<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <div>
        <NuxtLink to="/inventory" class="btn-text" style="display: inline-flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: var(--color-text-muted); text-decoration: none;">
          ← Kembali ke Stok
        </NuxtLink>
        <h1>Stock Opname (Cek Fisik)</h1>
      </div>
      <button @click="submitOpname" class="btn btn-primary" :disabled="loading || !hasChanges">
        {{ loading ? 'Menyimpan...' : 'Simpan Perubahan' }}
      </button>
    </div>

    <div class="card">
      <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
        <p style="color: var(--color-text-muted);">
          Masukkan jumlah fisik barang yang ada di gudang/toko. Sistem akan otomatis menghitung selisih.
        </p>
        <div style="font-weight: bold;">
          Total Item Berubah: <span :style="{ color: changeCount > 0 ? 'var(--color-warning)' : 'var(--color-text)' }">{{ changeCount }}</span>
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Nama Bahan</th>
              <th style="text-align: right;">Stok Sistem</th>
              <th style="width: 150px; text-align: right;">Stok Fisik</th>
              <th style="text-align: right;">Selisih</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in opnameItems" :key="item.id" 
                :style="{ background: item.actualQty !== item.systemQty ? 'rgba(239, 68, 68, 0.05)' : 'transparent' }">
              <td style="font-weight: 500;">
                {{ item.name }}
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">{{ item.unit }}</div>
              </td>
              <td style="text-align: right; color: var(--color-text-muted);">
                {{ item.systemQty }}
              </td>
              <td style="text-align: right;">
                <input 
                  type="number" 
                  v-model.number="item.actualQty" 
                  step="0.01" 
                  class="input"
                  style="text-align: right; max-width: 100px; margin: 0; padding: 0.25rem 0.5rem;"
                  @focus="$event.target.select()"
                >
              </td>
              <td style="text-align: right; font-weight: bold;" 
                  :class="getDiffClass(item.actualQty - item.systemQty)">
                {{ formatDiff(item.actualQty - item.systemQty) }}
              </td>
              <td>
                <input 
                  v-if="item.actualQty !== item.systemQty"
                  v-model="item.notes" 
                  type="text" 
                  class="input" 
                  placeholder="Alasan selisih..."
                  style="margin: 0; font-size: 0.85rem;"
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Confirmation Modal -->
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
const { data: materials } = await useFetch('/api/inventory')
const router = useRouter()
const loading = ref(false)

const opnameItems = ref([])

// Modal State
const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: false,
  confirmText: 'OK',
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
    confirmText: 'Ya, Simpan',
    confirmClass: 'btn-warning',
    onConfirm
  }
}

// ... existing code ...
watchEffect(() => {
  if (materials.value) {
    // Only init if empty to preserve edits during hot reload if unlikely
    if (opnameItems.value.length === 0) {
      opnameItems.value = materials.value.map(m => ({
        id: m.id,
        name: m.name,
        unit: m.unit,
        systemQty: m.stock,
        actualQty: m.stock, // Default to system stock
        notes: ''
      }))
    }
  }
})

const hasChanges = computed(() => {
  return opnameItems.value.some(i => i.actualQty !== i.systemQty)
})

const changeCount = computed(() => {
  return opnameItems.value.filter(i => i.actualQty !== i.systemQty).length
})

function getDiffClass(diff) {
  if (diff === 0) return ''
  if (diff > 0) return 'text-success'
  return 'text-danger'
}

function formatDiff(diff) {
  if (diff === 0) return '-'
  return (diff > 0 ? '+' : '') + parseFloat(diff.toFixed(2))
}

// ... existing logic ...

async function submitOpname() {
  showConfirm(
    'Konfirmasi Opname',
    'Apakah Anda yakin ingin menyimpan hasil Stock Opname ini? Stok sistem akan diperbarui mengikuti Stok Fisik.',
    async () => {
      loading.value = true
      try {
        const changes = opnameItems.value
          .filter(i => i.actualQty !== i.systemQty)
          .map(i => ({
             materialId: i.id,
             actualQty: i.actualQty,
             notes: i.notes
          }))
        
        if (changes.length === 0) {
          showAlert('Info', 'Tidak ada perubahan stok.')
          loading.value = false
          return
        }

        await $fetch('/api/inventory/opname', {
          method: 'POST',
          body: { items: changes }
        })

        showAlert('Berhasil', 'Stock Opname berhasil disimpan! Redirecting...')
        setTimeout(() => {
            router.push('/inventory')
        }, 1500)
      } catch (e) {
        showAlert('Error', 'Gagal menyimpan: ' + e.message)
      } finally {
        loading.value = false
      }
    }
  )
}
</script>

<style scoped>
.text-success { color: var(--color-success); }
.text-danger { color: var(--color-danger); }

/* Override input style for table compactness */
.input {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
}

.input:focus {
  border-color: var(--color-primary);
  outline: none;
}
</style>
