<template>
  <div class="customer-layout">
    <slot />
  </div>
</template>

<style scoped>
.customer-layout {
  min-height: 100vh;
  background-color: var(--color-bg); /* Use same theme */
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  padding-bottom: 80px; /* Space for fab */
}
</style>
