<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1>Catatan Pengeluaran</h1>
        <button @click="openAddModal" class="btn btn-danger">
           + Tambah Pengeluaran
        </button>
    </div>

    <!-- List Expenses -->
      <div class="card">
         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3>Riwayat Pengeluaran Hari Ini</h3>
           <input type="date" v-model="filterDate" class="input" style="width: auto; margin:0;">
        </div>

        <table v-if="expenses && expenses.length > 0">
          <thead>
            <tr>
              <th>Jam</th>
              <th>Uraian</th>
              <th>Kategori</th>
              <th>Nominal</th>
              <th>Ket</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ex in expenses" :key="ex.id">
              <td>{{ new Date(ex.date).toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'}) }}</td>
              <td>{{ ex.description }}</td>
              <td>
                <span :style="{ 
                  padding: '2px 6px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  backgroundColor: ex.category === 'HPP' ? '#f59e0b20' : '#ef444420',
                  color: ex.category === 'HPP' ? '#f59e0b' : '#ef4444'
                }">
                  {{ ex.category }}
                </span>
              </td>
              <td style="color: var(--color-danger);">- Rp {{ ex.amount.toLocaleString('id-ID') }}</td>
              <td>{{ ex.note }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else style="text-align: center; color: var(--color-text-muted); padding: 2rem;">
          Tidak ada pengeluaran pada tanggal ini.
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

    <!-- Input Expense Modal -->
    <BaseModal
      v-model:show="expenseModal.show"
      :title="'Input Pengeluaran'"
      :confirm-text="'Simpan Pengeluaran'"
      :show-cancel="true"
      @confirm="submitExpense"
    >
        <div style="padding: 1rem 0;">
          <label>Uraian Belanja</label>
          <input v-model="form.description" type="text" class="input" required placeholder="Contoh: Beli Susu, Bayar Listrik">

          <label>Kategori</label>
          <select v-model="form.category" class="select" required>
            <option value="HPP">HPP (Bahan Baku)</option>
            <option value="OPS">OPS (Operasional, Gaji, dll)</option>
          </select>

          <label>Nominal (Rp)</label>
          <input v-model="form.amount" type="number" class="input" required placeholder="0">

          <label>Keterangan (Optional)</label>
          <input v-model="form.note" type="text" class="input" placeholder="Catatan tambahan...">
        </div>
    </BaseModal>
  </div>
</template>

<script setup>
const today = new Date().toISOString().split('T')[0]
const filterDate = ref(today)

const { data: expenses, refresh } = await useFetch('/api/expenses', {
  query: { date: filterDate }
})

// Modal State
const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: false,
  confirmText: 'OK',
  onConfirm: () => {}
})

const expenseModal = ref({
  show: false
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
  description: '',
  category: 'HPP',
  amount: '',
  note: ''
})

function openAddModal() {
    form.value.description = ''
    form.value.amount = ''
    form.value.note = ''
    form.value.category = 'HPP'
    expenseModal.value.show = true
}

async function submitExpense() {
  try {
    if(!form.value.description || !form.value.amount) return

    await $fetch('/api/expenses', {
      method: 'POST',
      body: form.value
    })
    
    expenseModal.value.show = false
    refresh()
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
