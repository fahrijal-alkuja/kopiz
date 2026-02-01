<template>
  <div class="raffle-detail">
    <div style="margin-bottom: 2rem;">
      <NuxtLink to="/raffles" class="btn-back">← Kembali</NuxtLink>
    </div>

    <div v-if="pending" style="text-align: center; padding: 4rem;">
        <div class="spinner"></div>
    </div>
    
    <div v-else-if="error" style="text-align: center; color: var(--color-danger);">
        {{ error.message }}
    </div>

    <div v-else>
        <!-- Header Card -->
        <div class="card header-card" :class="statusClass(raffle.status)">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <div class="badge" :class="statusClass(raffle.status)">
                        {{ raffle.status === 'ACTIVE' ? 'SEDANG BERJALAN' : (raffle.status === 'DRAWN' ? 'SELESAI / DIUNDI' : 'BERAKHIR') }}
                    </div>
                    <h1 style="margin: 1rem 0; font-size: 2.5rem; background: linear-gradient(to right, #fff, #a5b4fc); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        {{ raffle.name }}
                    </h1>
                    <div style="display: flex; gap: 2rem; color: var(--color-text-muted);">
                        <div>
                            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Periode</div>
                            <div style="font-weight: bold; color: white;">{{ formatDate(raffle.startDate) }} — {{ formatDate(raffle.endDate) }}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Minimal Belanja</div>
                            <div style="font-weight: bold; color: white;">Rp {{ raffle.minimumSpend.toLocaleString('id-ID') }}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Action Button -->
                <div v-if="raffle.status === 'ACTIVE'">
                     <button 
                        @click="confirmDraw" 
                        class="btn-draw"
                        :disabled="isDrawing"
                     >
                        {{ isDrawing ? 'MENGUNDI...' : '🎲 ACAK PEMENANG' }}
                     </button>
                </div>
            </div>
        </div>

        <!-- WINNER SECTION -->
        <div v-if="raffle.winners && raffle.winners.length > 0" class="winner-section">
            <div class="winner-card">
                 <div style="font-size: 5rem; margin-bottom: 1rem;">🏆</div>
                 <h2 style="color: #FFD700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem;">Pemenang Terpilih</h2>
                 
                 <div class="winners-grid">
                    <div v-for="winner in raffle.winners" :key="winner.id" class="winner-item">
                        <div style="font-size: 0.9rem; color: #FFD700; font-weight: bold; text-transform: uppercase;">Pemenang Utama</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">{{ winner.customerName }}</div>
                        <div style="font-family: monospace; background: rgba(0,0,0,0.3); padding: 0.2rem 0.5rem; border-radius: 4px; display: inline-block; margin-top: 0.5rem;">
                            No. Struk: {{ winner.transactionId.substring(0, 8).toUpperCase() }}
                        </div>
                        
                        <!-- Print Button -->
                        <div style="margin-top: 1rem;">
                            <button @click="printWinner(winner)" class="btn-print">
                                🖨️ Cetak Bukti
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        
        <!-- SPINNING ANIMATION OVERLAY -->
        <div v-if="isSpinning" class="spin-overlay">
            <div class="spin-window">
                <div class="spin-content">
                    <div v-for="(name, i) in dummyNames" :key="i" class="spin-item">
                        {{ name }}
                    </div>
                </div>
                <div class="spin-line"></div>
            </div>
            <div style="margin-top: 2rem; font-size: 1.5rem; font-weight: bold; color: white;">
                MENGACAK PEMENANG...
            </div>
        </div>

    </div>

    <BaseModal
      v-model:show="modal.show"
      :title="modal.title"
      :message="modal.message"
      :show-cancel="modal.showCancel"
      :confirm-text="modal.confirmText"
      :confirm-class="modal.confirmClass"
      @confirm="modal.onConfirm"
    />
    
    <!-- Print Component -->
    <RaffleWinnerPrint 
        v-if="printingWinner"
        :is-open="true"
        :raffle-name="raffle.name"
        :winner-name="printingWinner.customerName"
        :transaction-id="printingWinner.transactionId"
        prize="Pemenang Utama"
    />

  </div>
</template>

<script setup>
import confetti from 'canvas-confetti'

const route = useRoute()
const id = route.params.id

const { data: raffle, pending, error, refresh } = await useFetch(`/api/raffles/${id}`)

const isDrawing = ref(false)
const isSpinning = ref(false)
const printingWinner = ref(null)

// Animation Dummies
const dummyNames = ref([
    'Budi Santoso', 'Siti Aminah', 'Rudi Hartono', 'Dewi Lestari', 'Agus Setiawan', 
    'Rina Marlina', 'Joko Widodo', 'Megawati', 'Susilo Bambang', 'Prabowo'
])

const modal = ref({
  show: false,
  title: '',
  message: '',
  showCancel: true,
  confirmText: 'Ya',
  confirmClass: 'btn-primary',
  onConfirm: () => {}
})

function statusClass(status) {
    if (status === 'ACTIVE') return 'status-active'
    if (status === 'DRAWN') return 'status-drawn'
    return 'status-closed'
}

function formatDate(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function confirmDraw() {
    modal.value = {
        show: true,
        title: 'Konfirmasi Pengundian',
        message: 'Apakah Anda yakin ingin mengacak pemenang untuk periode ini? Tindakan ini tidak dapat dibatalkan.',
        showCancel: true,
        confirmText: '🚀 MULAI UNDIAN',
        confirmClass: 'btn-primary',
        onConfirm: startDrawSequence
    }
}

async function startDrawSequence() {
    modal.value.show = false
    isDrawing.value = true
    isSpinning.value = true // Show overlay
    
    // Simulate spinning delay logic
    // We actually call API first to get result, but hold showing it until animation done?
    // Or call API *after* animation? Better call API first to ensure we HAVE a winner, then reveal.
    
    try {
        const { winner } = await $fetch(`/api/raffles/${id}/draw`, { method: 'POST' })
        
        // Let it spin for 3 seconds
        setTimeout(() => {
            isSpinning.value = false
            refresh() // Show the winner data
            fireConfetti()
            isDrawing.value = false
        }, 3000)
        
    } catch (e) {
        isSpinning.value = false
        isDrawing.value = false
        alert('Gagal mengundi: ' + e.message)
    }
}

function fireConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        const left = end - Date.now();
        
        if (left <= 0) return; // Stop

        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFD700', '#FFA500', '#FF4500']
        });
        
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00FFFF', '#FF00FF', '#FFFF00']
        });

        requestAnimationFrame(frame);
    }());
}

function printWinner(winner) {
    printingWinner.value = winner
    setTimeout(() => {
        window.print()
        printingWinner.value = null
    }, 500)
}
</script>

<style scoped>
.raffle-detail {
    max-width: 1000px;
    margin: 0 auto;
}

.btn-back {
    color: var(--color-text-muted);
    text-decoration: none;
    font-weight: 600;
}

.header-card {
    padding: 2rem;
    position: relative;
    overflow: hidden;
}

.status-active { background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1)); border-color: var(--color-success); }
.status-drawn { background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border-color: var(--color-warning); }
.status-closed { opacity: 0.7; }

.badge {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: bold;
    display: inline-block;
}

.badge.status-active { background: var(--color-success); color: white; }
.badge.status-drawn { background: var(--color-warning); color: black; }

.btn-draw {
    background: linear-gradient(to bottom right, #4f46e5, #ec4899);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-weight: 800;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
    transition: transform 0.2s;
}

.btn-draw:hover:not(:disabled) {
    transform: scale(1.05);
}

.btn-draw:disabled {
    opacity: 0.7;
    cursor: wait;
}

.winner-section {
    margin-top: 3rem;
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.winner-card {
    background: linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
    border: 2px solid #FFD700;
    border-radius: 1.5rem;
    padding: 3rem;
    text-align: center;
    box-shadow: 0 0 50px rgba(255, 215, 0, 0.2);
}

.winners-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.winner-item {
    background: rgba(255,255,255,0.05);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px dashed rgba(255,215,0,0.5);
    min-width: 300px;
}

.btn-print {
    background: transparent;
    border: 1px solid var(--color-text-muted);
    color: var(--color-text-muted);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;
}

.btn-print:hover {
    background: white;
    color: black;
}

/* SPIN OVERLAY */
.spin-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.spin-window {
    height: 100px;
    width: 300px;
    background: white;
    overflow: hidden;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 0 30px rgba(255,255,255,0.5);
}

.spin-content {
    animation: spinNames 0.5s linear infinite;
}

.spin-item {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid #eee;
}

.spin-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: red;
    transform: translateY(-50%);
    z-index: 10;
}

@keyframes spinNames {
    0% { transform: translateY(0); }
    100% { transform: translateY(-500px); } /* Move up by 5 items height */
}
</style>
