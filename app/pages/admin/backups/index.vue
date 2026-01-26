<template>
  <div class="backups-page">
    <div class="header">
      <h1>Data Backups</h1>
      <NuxtLink to="/" class="btn-back">Kembali</NuxtLink>
    </div>

    <div class="card">
      <div v-if="pending" class="loading">Memuat...</div>
      <div v-else-if="error" class="error">Gagal memuat: {{ error.message }}</div>
      
      <div v-else>
        <div class="alert-info">
          Backup berjalan otomatis setiap jam 02:00 WIB.
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th>Filename</th>
              <th>Size</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in backups" :key="file.name">
              <td>{{ file.name }}</td>
              <td>{{ (file.size / 1024 / 1024).toFixed(2) }} MB</td>
              <td>{{ new Date(file.createdAt).toLocaleString() }}</td>
              <td>
                <a :href="`/api/admin/backups/download?file=${file.name}`" class="btn btn-sm">Download</a>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="backups.length === 0" class="empty">
          Belum ada backup tersedia.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: backups, pending, error } = await useFetch('/api/admin/backups')
</script>

<style scoped>
.backups-page {
  padding: 2rem;
  max-width: 800px;
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

.alert-info {
  padding: 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  border-radius: var(--radius);
  margin-bottom: 1rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  background: var(--color-primary);
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.empty {
  padding: 2rem;
  text-align: center;
  color: var(--color-text-muted);
}
</style>
