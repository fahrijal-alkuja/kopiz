<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>Manajemen Promo</h1>
      <button @click="openCreateModal" class="btn btn-primary">Tambah Promo Baru</button>
    </div>

    <div class="card">
      <table v-if="promos && promos.length > 0">
        <thead>
          <tr>
            <th>Nama Promo</th>
            <th>Tipe</th>
            <th>Mulai Nilai</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in promos" :key="p.id">
            <td><strong>{{ p.name }}</strong></td>
            <td>{{ p.type }}</td>
            <td>
              {{ p.type === 'PERCENT' ? p.value + '%' : 'Rp ' + p.value.toLocaleString('id-ID') }}
            </td>
            <td>
              <span :class="['badge', p.isActive ? 'badge-success' : 'badge-danger']">
                {{ p.isActive ? 'Aktif' : 'Non-aktif' }}
              </span>
            </td>
            <td>
              <div style="display: flex; gap: 0.5rem;">
                <button @click="openEditModal(p)" class="btn-icon" style="color: var(--color-warning);">✏️</button>
                <button @click="deletePromo(p.id)" class="btn-icon" style="color: var(--color-danger);">🗑️</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
        Belum ada promo yang terdaftar.
      </div>
    </div>

    <!-- Form Modal -->
    <BaseModal v-model:show="showFormModal" :title="editingPromoId ? 'Edit Promo' : 'Tambah Promo Baru'">
      <form @submit.prevent="savePromo">
        <div class="form-group">
          <label>Nama Promo</label>
          <input v-model="form.name" type="text" class="input" placeholder="Contoh: Diskon Grand Opening" required>
        </div>
        <div class="form-group">
          <label>Tipe Diskon</label>
          <select v-model="form.type" class="select" required>
            <option value="PERCENT">Persentase (%)</option>
            <option value="NOMINAL">Nominal (Rp)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Nilai Potongan {{ form.type === 'PERCENT' ? '(%)' : '(Rp)' }}</label>
          <input v-model="form.value" type="number" class="input" required>
        </div>
         <div class="form-group" v-if="editingPromoId">
          <label>Status</label>
          <select v-model="form.isActive" class="select">
            <option :value="true">Aktif</option>
            <option :value="false">Non-aktif</option>
          </select>
        </div>
        
        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
          <button type="submit" class="btn btn-primary" style="flex: 1;">{{ editingPromoId ? 'Simpan Perubahan' : 'Buat Promo' }}</button>
          <button type="button" @click="showFormModal = false" class="btn" style="background: var(--color-border);">Batal</button>
        </div>
      </form>
    </BaseModal>

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
const { data: promos, refresh } = await useFetch('/api/promo')

const showFormModal = ref(false)
const editingPromoId = ref(null)

const form = ref({
  name: '',
  type: 'PERCENT',
  value: 0,
  isActive: true
})

function openCreateModal() {
  editingPromoId.value = null
  form.value = { name: '', type: 'PERCENT', value: 0, isActive: true }
  showFormModal.value = true
}

function openEditModal(promo) {
  editingPromoId.value = promo.id
  form.value = {
    name: promo.name,
    type: promo.type,
    value: promo.value,
    isActive: promo.isActive
  }
  showFormModal.value = true
}

async function savePromo() {
  try {
    if (editingPromoId.value) {
      // Update
      await $fetch(`/api/promo/${editingPromoId.value}`, {
        method: 'PUT',
        body: form.value
      })
    } else {
      // Create
      await $fetch('/api/promo', {
        method: 'POST',
        body: form.value
      })
    }
    
    showFormModal.value = false
    refresh()
  } catch (e) {
    showAlert('Error', e.data?.statusMessage || 'Gagal menyimpan promo')
  }
}

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

function deletePromo(id) {
  modal.value = {
    show: true,
    title: 'Hapus Promo?',
    message: 'Promo yang dihapus tidak dapat dikembalikan. Lanjutkan?',
    showCancel: true,
    confirmText: 'Ya, Hapus',
    confirmClass: 'btn-danger',
    onConfirm: async () => {
      try {
        await $fetch(`/api/promo/${id}`, { method: 'DELETE' })
        refresh()
      } catch (e) {
        showAlert('Error', 'Gagal menghapus promo')
      }
    }
  }
}
</script>
