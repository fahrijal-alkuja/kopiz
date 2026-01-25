<template>
  <div>
    <h1>Manajemen Shift & Kasir</h1>

    <div class="card" style="margin-top: 2rem; max-width: 600px;">
      <div v-if="!currentShift || currentShift.status === 'CLOSED'">
        <h3 style="color: var(--color-warning);">Shift Belum Dibuka</h3>
        <p>Silakan masukkan saldo kas awal untuk memulai transaksi hari ini.</p>
        
        <label>Uang Kas Awal (Rp)</label>
        <input v-model="openingCash" type="number" class="input" placeholder="Contoh: 50000">
        
        <button @click="openShift" class="btn" style="width: 100%;">Buka Shift Baru</button>
      </div>

      <div v-else>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem;">
           <div>
             <h3 style="color: var(--color-success); margin: 0;">Shift Sedang Aktif</h3>
             <div v-if="currentShift.user" style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 0.25rem;">
               Kasir: <span style="color: var(--color-text); font-weight: 600;">{{ currentShift.user.name }}</span>
             </div>
           </div>
           <div style="background: hsla(158, 64%, 52%, 0.1); color: var(--color-success); padding: 0.4rem 1rem; border-radius: 2rem; font-size: 0.875rem; border: 1px solid hsla(158, 64%, 52%, 0.2);">
             Mulai {{ new Date(currentShift.startTime).toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) }}
           </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          <div style="padding: 1.25rem; background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid var(--glass-border);">
            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">Kas Awal</div>
            <div style="font-size: 1.2rem; font-weight: bold;">Rp {{ currentShift.openingCash.toLocaleString('id-ID') }}</div>
          </div>
          <div style="padding: 1.25rem; background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid var(--glass-border);">
            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">Penjualan Cash</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: var(--color-primary);">Rp {{ currentShift.summary?.cashTotal.toLocaleString('id-ID') }}</div>
          </div>
          <div style="padding: 1.25rem; background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid var(--glass-border);">
            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">Penjualan QRIS</div>
            <div style="font-size: 1.2rem; font-weight: bold; color: var(--color-warning);">Rp {{ currentShift.summary?.qrisTotal.toLocaleString('id-ID') }}</div>
          </div>
        </div>

        <div style="background: hsla(217, 91%, 60%, 0.05); border: 1px solid var(--color-primary-glow); padding: 1.5rem; border-radius: 1rem; margin-bottom: 2rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; color: var(--color-text-muted);">
            <span style="font-size: 0.9rem;">Target Saldo Laci (Kas Awal + Cash)</span>
            <span style="font-weight: 600; color: var(--color-text);">Rp {{ currentShift.summary?.expectedCash.toLocaleString('id-ID') }}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.15rem; padding-top: 0.75rem; border-top: 1px solid var(--color-border);">
            <span>Total Omset Shift (Net)</span>
            <span class="text-success">Rp {{ currentShift.summary?.totalRevenue.toLocaleString('id-ID') }}</span>
          </div>
        </div>

        <hr style="border: 0; border-top: 1px solid var(--color-border); margin-bottom: 2rem;">

        <h4>Langkah Tutup Shift</h4>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">Hitung jumlah uang fisik yang ada di laci kasir saat ini.</p>
        
        <label>Uang Kas Akhir (Fisik)</label>
        <div style="display: flex; gap: 1rem; align-items: flex-start;">
          <div style="flex: 1;">
            <input v-model="closingCash" type="number" class="input" placeholder="Masukkan total uang fisik...">
          </div>
          <button @click="closeShift" class="btn btn-danger" style="padding: 0.8rem 2rem;">Tutup Shift</button>
        </div>
        
        <div v-if="closingCash && currentShift.summary" style="margin-top: 1rem; padding: 1rem; border-radius: 0.75rem; background: rgba(0,0,0,0.2); border: 1px dashed var(--color-border);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
             <span style="font-size: 0.9rem;">Selisih (Discrepancy):</span>
             <span :class="closingCash - currentShift.summary.expectedCash === 0 ? 'text-success' : 'text-danger'" style="font-weight: bold; font-size: 1.1rem;">
               Rp {{ (closingCash - currentShift.summary.expectedCash).toLocaleString('id-ID') }}
             </span>
          </div>
        </div>
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
const { data: currentShift, refresh } = await useFetch('/api/shifts')

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
    confirmText: 'Ya, Tutup Shift',
    confirmClass: 'btn-danger',
    onConfirm
  }
}

const openingCash = ref('')
const closingCash = ref('')

async function openShift() {
  if (!openingCash.value) return showAlert('Peringatan', 'Masukkan uang kas awal sebelum membuka shift.')
  await $fetch('/api/shifts', {
    method: 'POST',
    body: { action: 'OPEN', cash: openingCash.value }
  })
  refresh()
}

async function closeShift() {
  if (!closingCash.value) return showAlert('Peringatan', 'Masukkan uang kas akhir (fisik) untuk menutup shift.')
  
  showConfirm(
    'Konfirmasi Tutup Shift',
    'Yakin ingin menutup shift? Pastikan semua transaksi hari ini sudah tercatat dengan benar.',
    async () => {
      await $fetch('/api/shifts', {
        method: 'POST',
        body: { action: 'CLOSE', cash: closingCash.value }
      })
      refresh()
    }
  )
}
</script>

<style scoped>
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.stat-box {
  background: var(--color-bg);
  padding: 1rem;
  border-radius: 0.5rem;
}
.label {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}
.val {
  font-size: 1.2rem;
  font-weight: bold;
}
.badge {
  background: var(--color-success);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
}

.btn-danger {
  background: var(--color-danger);
  color: white;
}
</style>
