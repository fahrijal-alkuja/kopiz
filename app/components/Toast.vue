<template>
  <div
    v-if="visible"
    class="fixed bottom-4 right-4 z-50 rounded-lg shadow-lg p-4 transition-opacity duration-300"
    :class="[
      type === 'success' ? 'bg-green-500 text-white' : '',
      type === 'error' ? 'bg-red-500 text-white' : '',
      type === 'info' ? 'bg-blue-500 text-white' : '',
      type === 'warning' ? 'bg-yellow-500 text-white' : ''
    ]"
  >
    <div class="flex items-center justify-between">
      <span>{{ message }}</span>
      <button @click="close" class="ml-4 text-white hover:text-gray-200">
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  type: {
    type: String,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  }
})

const emit = defineEmits(['close'])
const visible = ref(true)

const close = () => {
  visible.value = false
  emit('close')
}

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(close, props.duration)
  }
})
</script>
