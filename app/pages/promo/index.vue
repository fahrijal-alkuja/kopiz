<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>Manajemen Promo</h1>
      <button @click="showModal = true" class="btn btn-primary">Tambah Promo Baru</button>
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
              <button @click="deletePromo(p.id)" class="btn-icon" style="color: var(--color-danger);">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else style="text-align: center; padding: 3rem; color: var(--color-text-muted);">
        Belum ada promo yang terdaftar.
      </div>
    </div>

    <!-- Modal Form -->
    <BaseModal v-model:show="showModal" title="Daftar Promo Baru">
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
        
        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
          <button type="submit" class="btn btn-primary" style="flex: 1;">Simpan</button>
          <button type="button" @click="showModal = false" class="btn" style="background: var(--color-border);">Batal</button>
        </div>
      </form>
    </BaseModal>
  </div>
</template>

<script setup>
const { data: promos, refresh } = await useFetch('/api/promo')
const showModal = ref(false)

const form = ref({
  name: '',
  type: 'PERCENT',
  value: 0,
  isActive: true
})

async function savePromo() {
  try {
    await $fetch('/api/promo', {
      method: 'POST',
      body: form.value
    })
    showModal.value = false
    refresh()
    form.value = { name: '', type: 'PERCENT', value: 0, isActive: true }
  } catch (e) {
    alert(e.data?.statusMessage || 'Gagal menyimpan promo')
  }
}

async function deletePromo(id) {
  if (confirm('Hapus promo ini?')) {
    await $fetch(`/api/promo/${id}`, { method: 'DELETE' })
    refresh()
  }
}
</script>
