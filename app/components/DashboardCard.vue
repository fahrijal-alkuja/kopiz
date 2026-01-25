<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div v-if="icon" class="card-icon">
        <span class="icon-text">{{ icon }}</span>
      </div>
    </div>
    <div class="card-body">
      <h2 class="card-value">{{ value }}</h2>
    </div>
    <div v-if="subtitle" class="card-subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  subtitle: String,
  icon: String
})
</script>

<style scoped>
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-title {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
}

.card-icon {
  padding: 0.5rem;
  background-color: rgba(59, 130, 246, 0.1); /* bg-blue-50 equivalent */
  border-radius: 0.5rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-text {
  font-size: 1.25rem;
  line-height: 1;
}

.card-body {
  display: flex;
  align-items: baseline;
}

.card-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.card-subtitle {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}
</style>


