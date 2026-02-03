<script setup>
import { useNetwork } from '@vueuse/core'
import { db } from '~/utils/db'

const { user, logout, isOwner } = useAuth()
const { isOnline } = useNetwork()
const pendingSyncCount = ref(0)
const isSyncing = ref(false)

// Check pending on load
onMounted(async () => {
  pendingSyncCount.value = await db.offlineSales.where('synced').equals(0).count()
})

// Auto-sync when online
watch(isOnline, async (online) => {
  if (online) {
    await syncOfflineSales()
  }
})

async function syncOfflineSales() {
  const pending = await db.offlineSales.toArray()
  if (pending.length === 0) return

  isSyncing.value = true
  try {
    for (const sale of pending) {
      await $fetch('/api/sales', {
        method: 'POST',
        body: {
          items: sale.items,
          paymentMethod: sale.paymentMethod,
          isTakeaway: false,
          promoId: null,
          discountAmount: 0,
          date: sale.createdAt
        }
      })
      await db.offlineSales.delete(sale.id)
    }
    pendingSyncCount.value = 0
    alert('Data offline berhasil disinkronisasi!')
  } catch (e) {
    console.error('Sync failed', e)
  } finally {
    isSyncing.value = false
  }
}
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-logo" style="text-align: center; margin-bottom: 2rem;">
        <img src="/logo.jpg" alt="Kopi Z" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid var(--color-primary);">
      </div>
      
      <div v-if="user" class="user-info" style="margin-bottom: 2rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;">
        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Masuk sebagai:</div>
        <div style="font-weight: bold;">{{ user.name }} ({{ user.role }})</div>
      </div>

      <!-- Network Status -->
      <div v-if="!isOnline" style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-danger); color: white; text-align: center; border-radius: 4px; font-weight: bold;">
        📡 OFFLINE MODE
      </div>
      <div v-else-if="pendingSyncCount > 0" style="margin-bottom: 1rem; padding: 0.5rem; background: var(--color-warning); color: black; text-align: center; border-radius: 4px; font-weight: bold; cursor: pointer;" @click="syncOfflineSales">
        🔄 {{ isSyncing ? 'Syncing...' : `Sync ${pendingSyncCount} Data` }}
      </div>

      <nav style="flex: 1; overflow-y: auto;">
        <ul style="list-style: none; padding: 0;">
          <li><NuxtLink to="/" class="nav-link">🏠 Dashboard</NuxtLink></li>
          <li><NuxtLink to="/shifts" class="nav-link">⏱️ Shifts / Kasir</NuxtLink></li>
          <li><NuxtLink to="/sales" class="nav-link">💰 Transaksi</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/reports" class="nav-link">📊 Laporan</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/expenses" class="nav-link">💸 Pengeluaran</NuxtLink></li>
          <li><NuxtLink to="/inventory" class="nav-link">📦 Stok Bahan</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/menu" class="nav-link">☕ Master Menu</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/promo" class="nav-link">🏷️ Manajemen Promo</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/raffles" class="nav-link">🎟️ Manajemen Undian</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/users" class="nav-link">👥 Manajemen Barista</NuxtLink></li>
          <li v-if="isOwner"><NuxtLink to="/admin/settings/qr" class="nav-link">🖨️ Cetak QR Meja</NuxtLink></li>
          
          
          <!-- New Admin Links -->
          <li v-if="isOwner" style="margin-top: 1rem; border-top: 1px solid var(--color-border); padding-top: 1rem;">
            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 0.5rem; padding-left: 1rem;">SYSTEM</div>
            <NuxtLink to="/admin/audit" class="nav-link">📜 Audit Logs</NuxtLink>
            <NuxtLink to="/admin/backups" class="nav-link">💾 Backups</NuxtLink>
          </li>

          <!-- Mobile Logout Item (Visible only on mobile via CSS) -->
          <li class="mobile-only-logout">
            <a @click="logout" class="nav-link" style="color: var(--color-danger); cursor: pointer;">🚪 Keluar</a>
          </li>
        </ul>
      </nav>

      <button @click="logout" class="btn logout-btn" style="width: 100%; text-align: left; margin-top: 2rem; background: transparent; border: 1px solid var(--color-border); padding: 0.75rem 1rem; color: var(--color-danger); border-radius: 0.5rem; cursor: pointer;">
        🚪 Keluar
      </button>
    </aside>
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--color-text-muted);
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
  text-decoration: none;
}

@media (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    padding: 0.75rem;
    flex-direction: column;
    height: auto;
  }
  .sidebar-logo, .user-info, .logout-btn {
    display: none;
  }
  nav ul {
    display: flex;
    overflow-x: auto;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  nav ul::-webkit-scrollbar {
    display: none;
  }
  .nav-link {
    margin-bottom: 0;
    white-space: nowrap;
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
  }

  .mobile-only-logout {
    display: block;
  }
}

/* Hide mobile logout on desktop */
@media (min-width: 769px) {
  .mobile-only-logout {
    display: none;
  }
}
</style>
