<template>
  <div class="audit-page">
    <div class="header">
      <h1>Jejak Aktivitas (Audit Logs)</h1>
      <NuxtLink to="/" class="btn-back">Kembali ke Dashboard</NuxtLink>
    </div>

    <div class="card">
      <div v-if="pending" class="loading">Memuat Logs...</div>
      <div v-else-if="error" class="error">Gagal memuat data: {{ error.message }}</div>
      
      <div v-else class="table-container">
        <table>
          <thead>
            <tr>
              <th>Waktu</th>
              <th>User</th>
              <th>Aksi</th>
              <th>Entitas</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in logs" :key="log.id">
              <td>{{ formatDate(log.createdAt) }}</td>
              <td>
                <span v-if="log.user">{{ log.user.name }} ({{ log.user.role }})</span>
                <span v-else class="text-muted">System</span>
              </td>
              <td>
                <span :class="['badge', getActionClass(log.action)]">{{ log.action }}</span>
              </td>
              <td>{{ log.entity }} #{{ log.entityId }}</td>
              <td>{{ log.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: logs, pending, error } = await useFetch('/api/admin/audit')

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString('id-ID', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

function getActionClass(action) {
  switch (action) {
    case 'CREATE': return 'bg-success'
    case 'DELETE': return 'bg-danger'
    case 'UPDATE': return 'bg-warning'
    default: return 'bg-info'
  }
}
</script>

<style scoped>
.audit-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.btn-back {
  padding: 0.5rem 1rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  color: var(--color-text);
  text-decoration: none;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

th {
  font-weight: 600;
  color: var(--color-text-muted);
}

.badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

.bg-success { background: rgba(16, 185, 129, 0.2); color: #10b981; }
.bg-danger { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.bg-warning { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
.bg-info { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }

.text-muted { color: var(--color-text-muted); }
</style>
