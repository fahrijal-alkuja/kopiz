<template>
  <div class="error-page">
    <div class="error-card">
      <div style="font-size: 5rem; margin-bottom: 1rem;">☕⚠️</div>
      <h1 v-if="error.statusCode === 404">Halaman Tidak Ditemukan</h1>
      <h1 v-else>Terjadi Kesalahan</h1>
      
      <p style="margin: 1rem 0; color: var(--color-text-muted); line-height: 1.6;">
        Maaf, halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia saat ini.
        <br>
        Tenang, kopi kami masih hangat kok.
      </p>

      <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
        <button @click="handleClearError" class="btn btn-primary" style="padding: 0.75rem 2rem;">
          Kembali ke Dashboard
        </button>
      </div>

      <div v-if="error.statusCode !== 404" style="margin-top: 2rem; font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 0.5rem; text-align: left;">
        <div style="color: var(--color-danger); font-weight: bold;">Error Detail:</div>
        <pre style="white-space: pre-wrap; word-break: break-all; margin-top: 0.5rem;">{{ error.message }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 20%);
  padding: 1rem;
}

.error-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  padding: 3rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-premium);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #cbd5e1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}
</style>
