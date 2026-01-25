<template>
  <div class="login-page">
    <div class="card login-card">
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/logo.jpg" alt="Kopi Z" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--color-primary); margin-bottom: 1rem;">
        <h1 style="margin: 0; color: var(--color-primary);">APPKOPZ</h1>
        <p style="color: var(--color-text-muted);">Masukkan PIN untuk masuk</p>
      </div>

      <div class="pin-display">
        <span v-for="i in 4" :key="i" class="pin-dot" :class="{ active: pin.length >= i }"></span>
      </div>

      <div class="pin-pad">
        <button v-for="n in 9" :key="n" @click="press(n)">{{ n }}</button>
        <button @click="clear">C</button>
        <button @click="press(0)">0</button>
        <button @click="backspace">⌫</button>
      </div>

      <div v-if="error" class="error-msg">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const pin = ref('')
const error = ref('')
const { login } = useAuth()

async function press(n) {
  if (pin.value.length < 4) {
    pin.value += n
    error.value = ''
    
    if (pin.value.length === 4) {
      try {
        await login(pin.value)
        navigateTo('/')
      } catch (e) {
        error.value = 'PIN Salah, coba lagi.'
        pin.value = ''
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
  max-width: 350px;
  padding: 2.5rem;
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
</style>
