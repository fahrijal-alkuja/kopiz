<template>
  <Transition name="fade">
    <div v-if="show" class="modal-backdrop" @click.self="handleCancel">
      <Transition name="zoom">
        <div v-if="show" class="modal-content card">
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <button class="close-btn" @click="handleCancel">&times;</button>
          </div>
          <div class="modal-body">
            <p v-if="message">{{ message }}</p>
            <slot />
          </div>
          <div class="modal-footer">
            <button v-if="showCancel" class="btn btn-secondary" @click="handleCancel">
              {{ cancelText }}
            </button>
            <button :class="['btn', confirmClass]" @click="handleConfirm">
              {{ confirmText }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  title: { type: String, default: 'Konfirmasi' },
  message: String,
  confirmText: { type: String, default: 'Ya, Lanjutkan' },
  cancelText: { type: String, default: 'Batal' },
  showCancel: { type: Boolean, default: true },
  confirmClass: { type: String, default: 'btn-primary' }
})

const emit = defineEmits(['confirm', 'cancel', 'update:show'])

function handleConfirm() {
  emit('confirm')
  emit('update:show', false)
}

function handleCancel() {
  emit('cancel')
  emit('update:show', false)
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  width: 90%;
  max-width: 450px;
  max-height: 90vh; /* Ensure modal doesn't exceed screen height */
  background: rgba(30, 41, 59, 0.9); /* Slightly more opaque for readability */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-shrink: 0; /* Header doesn't shrink */
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.close-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--color-danger);
}

.modal-body {
  margin-bottom: 1.5rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  overflow-y: auto; /* Enable vertical scroll */
  flex: 1; /* Take up available space */
  padding-right: 0.5rem;
  scrollbar-width: thin;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-shrink: 0; /* Footer doesn't shrink */
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 1rem;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.zoom-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
