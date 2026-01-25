<template>
  <div>
    <h1>Manajemen Barista</h1>
    
    <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem; margin-top: 2.5rem;">
      <!-- USER LIST -->
      <div class="card">
        <h3>Daftar Barista & User</h3>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">Kelola akses akun untuk operasional kedai.</p>
        
        <div v-if="users && users.length > 0" class="table-container">
          <table>
            <thead>
              <tr>
                <th>Nama Lengkap</th>
                <th>Role</th>
                <th>Terdaftar</th>
                <th style="width: 120px; text-align: right;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in users" :key="u.id" :style="{ opacity: u.role === 'OWNER' && currentUser?.id !== u.id ? 0.6 : 1 }">
                <td>
                  <div style="font-weight: 600;">{{ u.name }}</div>
                  <div v-if="currentUser?.id === u.id" style="font-size: 0.7rem; color: var(--color-primary);">Ini Anda</div>
                </td>
                <td>
                  <span class="badge" :style="{ background: u.role === 'OWNER' ? 'var(--color-primary-glow)' : 'rgba(255,255,255,0.05)', color: u.role === 'OWNER' ? 'var(--color-primary)' : 'var(--color-text-muted)' }">
                    {{ u.role }}
                  </span>
                </td>
                <td style="font-size: 0.85rem; color: var(--color-text-muted);">
                  {{ new Date(u.createdAt).toLocaleDateString('id-ID') }}
                </td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                    <button @click="editUser(u)" class="btn-icon" title="Edit">✏️</button>
                    <button v-if="currentUser?.id !== u.id" @click="confirmDelete(u.id)" class="btn-icon text-danger" title="Hapus">🗑️</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else style="padding: 2rem; text-align: center; color: var(--color-text-muted);">
          Belum ada data user.
        </div>
      </div>

      <!-- FORM SECTION -->
      <div class="card">
        <h3>{{ isEditing ? 'Edit User' : 'Tambah Barista Baru' }}</h3>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 2rem;">
          {{ isEditing ? 'Perbarui informasi akun barista.' : 'Berikan akses kasir dengan mendaftarkan nama dan PIN.' }}
        </p>

        <form @submit.prevent="handleSubmit">
          <label>Nama Lengkap</label>
          <input v-model="form.name" type="text" class="input" placeholder="Contoh: Budi Santoso" required>

          <label>PIN Akses (Minimal 4 Angka)</label>
          <input v-model="form.pin" type="password" class="input" :placeholder="isEditing ? 'Isi hanya jika ingin ganti PIN' : '1234'" :required="!isEditing">
          
          <label>Role / Jabatan</label>
          <select v-model="form.role" class="select" required>
            <option value="BARISTA">BARISTA (Akses Kasir)</option>
            <option value="OWNER">OWNER (Akses Penuh)</option>
          </select>

          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
            <button v-if="isEditing" type="button" @click="resetForm" class="btn" style="background: transparent; border: 1px solid var(--color-border); flex: 1;">Batal</button>
            <button type="submit" class="btn btn-primary" style="flex: 2;">{{ isEditing ? 'Simpan Perubahan' : 'Daftarkan User' }}</button>
          </div>
        </form>
      </div>
    </div>

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
const { data: users, refresh } = await useFetch('/api/users')
const { user: currentUser } = useAuth()

const isEditing = ref(false)
const form = ref({
  id: null,
  name: '',
  pin: '',
  role: 'BARISTA'
})

// Modal State
const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: true,
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
    confirmText: 'Ya, Hapus',
    confirmClass: 'btn-danger',
    onConfirm
  }
}

function resetForm() {
  isEditing.value = false
  form.value = { id: null, name: '', pin: '', role: 'BARISTA' }
}

function editUser(u) {
  isEditing.value = true
  form.value = {
    id: u.id,
    name: u.name,
    pin: '', // Pin remains empty unless changed
    role: u.role
  }
}

async function handleSubmit() {
  try {
    const method = isEditing.value ? 'PUT' : 'POST'
    await $fetch('/api/users', { 
      method, 
      body: form.value 
    })
    
    showAlert('Berhasil', isEditing.value ? 'Data user telah diperbarui.' : 'Barista baru telah didaftarkan.')
    resetForm()
    refresh()
  } catch (e) {
    showAlert('Gagal', e.data?.statusMessage || 'Terjadi kesalahan sistem.')
  }
}

async function confirmDelete(id) {
  showConfirm(
    'Hapus User?',
    'Akses user ini akan dicabut permanen. Lanjutkan?',
    async () => {
      try {
        await $fetch('/api/users', { 
          method: 'DELETE',
          query: { id }
        })
        refresh()
      } catch (e) {
        showAlert('Error', e.message)
      }
    }
  )
}
</script>

<style scoped>
.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 0.5rem;
  transition: background 0.2s;
}
.btn-icon:hover {
  background: rgba(255,255,255,0.05);
}
.text-danger { color: var(--color-danger); }
.badge {
  padding: 0.2rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.7rem;
  font-weight: bold;
}
</style>
