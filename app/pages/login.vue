<template>
  <div class="login-page">
    <div class="card login-card">
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/logo.jpg" alt="Kopi Z" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--color-primary); margin-bottom: 1rem;">
        <h1 style="margin: 0; color: var(--color-primary);">KopiZ</h1>
        <p style="color: var(--color-text-muted);">
          {{ selectedUser ? `Halo, ${selectedUser.name}` : 'Pilih Akun' }}
        </p>
      </div>

      <Transition name="fade" mode="out-in">
        <!-- STEP 1: SELECT USER -->
        <div v-if="!selectedUser" class="user-grid" key="users">
          <div v-if="pending" class="loading-msg">Memuat pengguna...</div>
          <div v-else-if="status === 'error'" class="error-msg">Gagal memuat pengguna. Cek koneksi.</div>
          <div v-else-if="!users || users.length === 0" class="empty-msg">
            Belum ada pengguna.<br>
            <small>Silakan hubungi administrator.</small>
          </div>
          <div v-else v-for="user in users" :key="user.id" class="user-btn" @click="selectUser(user)">
             <div class="user-avatar">
              {{ user.name.charAt(0).toUpperCase() }}
            </div>
            <div style="font-weight: 600;">{{ user.name }}</div>
          </div>
        </div>

        <!-- STEP 2: INPUT PIN -->
        <div v-else class="pin-step" key="input">
          <div class="pin-display">
             <!-- Use bounce animation for dots when validating -->
            <span v-for="i in 4" :key="i" class="pin-dot" :class="{ active: pin.length >= i, pulse: isLoading && pin.length === 4 }"></span>
          </div>

          <div v-if="isLoading" class="loading-dots">
            <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>

          <div v-else class="pin-pad">
            <button v-for="n in 9" :key="n" @click="press(n)">{{ n }}</button>
            <button @click="resetUser" style="background: var(--color-warning); color: black;">↩</button>
            <button @click="press(0)">0</button>
            <button @click="backspace">⌫</button>
          </div>

          <div v-if="error" class="error-msg shake">{{ error }}</div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const { data: users, pending, status } = await useFetch('/api/auth/users', { lazy: true })

const selectedUser = ref(null)
const pin = ref('')
const error = ref('')
const isLoading = ref(false) // New state
const { login } = useAuth()

function selectUser(user) {
  selectedUser.value = user
  pin.value = ''
  error.value = ''
}

async function press(n) {
  if (isLoading.value) return // Prevent input while loading
  
  if (pin.value.length < 4) {
    pin.value += n
    error.value = ''
    
    if (pin.value.length === 4) {
      if (!selectedUser.value) return 
      
      isLoading.value = true // Start loading
      
      // Artificial delay for better UX (optional, but requested for "feel")
      await new Promise(r => setTimeout(r, 600)) 
      
      try {
        await login(pin.value, selectedUser.value.id)
        navigateTo('/')
      } catch (e) {
        error.value = 'PIN Salah, coba lagi.'
        pin.value = ''
      } finally {
        isLoading.value = false // Stop loading
      }
    }
  }
}

function clear() {
  pin.value = ''
}

function backspace() {
  pin.value = pin.value.slice(0, -1)
}

function resetUser() {
  selectedUser.value = null
  pin.value = ''
  error.value = ''
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--color-bg);
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.user-btn {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
}

.user-btn:hover {
  background: var(--color-border);
  transform: translateY(-2px);
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.pin-display {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.pin-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  transition: all 0.2s;
}

.pin-dot.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.pin-pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.pin-pad button {
  height: 4rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.pin-pad button:hover {
  background: var(--color-border);
  transform: scale(1.05);
}

.pin-pad button:active {
  transform: scale(0.95);
}

.error-msg {
  text-align: center;
  color: var(--color-danger);
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Loading Dots Animation */
.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  to { transform: translateY(-8px); opacity: 0.5; }
}

.loading-msg, .empty-msg {
  grid-column: span 2;
  text-align: center;
  padding: 2rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border-radius: 0.5rem;
  border: 1px dashed var(--color-border);
}

.error-msg {
  text-align: center;
  color: var(--color-danger);
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
</style>
