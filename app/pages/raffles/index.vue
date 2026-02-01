<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>Manajemen Undian (Raffle)</h1>
      <button @click="openCreateModal" class="btn btn-primary">➕ Buat Undian Baru</button>
    </div>

    <!-- Active Raffles -->
    <div v-if="raffles && raffles.length > 0" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
      <div v-for="raffle in raffles" :key="raffle.id" class="card" style="position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
            <div>
                <h3 style="margin: 0;">{{ raffle.name }}</h3>
                <div :class="['badge', raffle.status === 'ACTIVE' ? 'badge-success' : 'badge-secondary']" style="margin-top: 0.5rem; display: inline-block;">
                    {{ raffle.status === 'ACTIVE' ? 'Berjalan' : (raffle.status === 'DRAWN' ? 'Selesai' : raffle.status) }}
                </div>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: start;">
                <button @click="openEditModal(raffle)" class="btn btn-sm btn-outline" style="border: none; padding: 0.5rem;" title="Edit">✏️</button>
                <button @click="confirmDelete(raffle)" class="btn btn-sm btn-outline" style="border: none; padding: 0.5rem; color: var(--color-danger);" title="Hapus">🗑️</button>
                <NuxtLink :to="`/raffles/${raffle.id}`" class="btn btn-sm btn-outline">Detail &rarr;</NuxtLink>
            </div>
        </div>
        
        <div style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">
            <div>📅 {{ formatDate(raffle.startDate) }} - {{ formatDate(raffle.endDate) }}</div>
            <div>💰 Min. Belanja: Rp {{ raffle.minimumSpend.toLocaleString('id-ID') }}</div>
        </div>

        <div v-if="raffle.winners && raffle.winners.length > 0" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--color-border);">
            <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 0.25rem;">🏆 Pemenang:</div>
            <div v-for="w in raffle.winners" :key="w.id" style="font-size: 0.9rem;">
                {{ w.customerName }} ({{ w.transactionId.substring(0, 8).toUpperCase() }})
            </div>
        </div>
      </div>
    </div>
    
    <div v-else class="card" style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
      Belum ada kampanye undian yang dibuat.
    </div>

    <!-- Create/Edit Modal -->
    <BaseModal v-model:show="showCreateModal" :title="editingId ? 'Edit Undian' : 'Buat Undian Baru'">
      <form @submit.prevent="saveRaffle">
        <div class="form-group">
          <label>Nama Undian</label>
          <input v-model="form.name" type="text" class="input" placeholder="Contoh: Undian Februari 2026" required>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label>Tanggal Mulai</label>
              <input v-model="form.startDate" type="date" class="input" required>
            </div>
            <div class="form-group">
              <label>Tanggal Selesai</label>
              <input v-model="form.endDate" type="date" class="input" required>
            </div>
        </div>

        <div class="form-group">
          <label>Minimal Belanja (Rp)</label>
          <input v-model.number="form.minimumSpend" type="number" class="input" placeholder="0 untuk semua transaksi" min="0">
        </div>
        
        <!-- Status Edit only -->
        <div v-if="editingId" class="form-group">
          <label>Status</label>
          <select v-model="form.status" class="select">
              <option value="ACTIVE">BERJALAN (Active)</option>
              <option value="CLOSED">DITUTUP (Closed)</option>
              <option value="DRAWN">SELESAI (Drawn)</option>
          </select>
        </div>

        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
          <button type="submit" class="btn btn-primary" style="flex: 1;" :disabled="isSubmitting">
            {{ isSubmitting ? 'Menyimpan...' : (editingId ? 'Simpan Perubahan' : 'Simpan Undian') }}
          </button>
          <button type="button" @click="showCreateModal = false" class="btn" style="background: var(--color-border);">Batal</button>
        </div>
      </form>
    </BaseModal>

    <!-- Confirm Dialog -->
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
const { data: raffles, refresh } = await useFetch('/api/raffles')

const showCreateModal = ref(false)
const isSubmitting = ref(false)
const editingId = ref(null)

const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: true,
  confirmText: 'Ya',
  confirmClass: 'btn-primary',
  onConfirm: () => {}
})

// Default dates
const today = new Date().toISOString().split('T')[0]
const nextTwoWeeks = new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0]

const form = ref({
  name: '',
  startDate: today,
  endDate: nextTwoWeeks,
  minimumSpend: 0,
  status: 'ACTIVE'
})

function openCreateModal() {
  editingId.value = null
  form.value = {
    name: '',
    startDate: today,
    endDate: nextTwoWeeks,
    minimumSpend: 0,
    status: 'ACTIVE'
  }
  showCreateModal.value = true
}

function openEditModal(raffle) {
  editingId.value = raffle.id
  form.value = {
    name: raffle.name,
    startDate: new Date(raffle.startDate).toISOString().split('T')[0],
    endDate: new Date(raffle.endDate).toISOString().split('T')[0],
    minimumSpend: raffle.minimumSpend,
    status: raffle.status
  }
  showCreateModal.value = true
}

async function saveRaffle() {
  isSubmitting.value = true
  try {
    if (editingId.value) {
        // Edit
        await $fetch(`/api/raffles/${editingId.value}`, {
            method: 'PUT',
            body: form.value
        })
    } else {
        // Create
        await $fetch('/api/raffles/create', {
            method: 'POST',
            body: {
                name: form.value.name,
                startDate: form.value.startDate,
                endDate: form.value.endDate,
                minimumSpend: form.value.minimumSpend
            } // Create API doesn't take status, defaults to ACTIVE
        })
    }
    
    showCreateModal.value = false
    refresh()
  } catch (e) {
    alert(e.data?.statusMessage || 'Gagal menyimpan undian')
  } finally {
    isSubmitting.value = false
  }
}

function confirmDelete(raffle) {
    modal.value = {
        show: true,
        title: 'Hapus Undian?',
        message: `Menghapus undian "${raffle.name}" akan menghapus data pemenang juga. Lanjutkan?`,
        showCancel: true,
        confirmText: 'Ya, Hapus',
        confirmClass: 'btn-danger',
        onConfirm: async () => {
            try {
                await $fetch(`/api/raffles/${raffle.id}`, { method: 'DELETE' })
                modal.value.show = false
                refresh()
            } catch (e) {
                alert('Gagal menghapus undian')
            }
        }
    }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>
