<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="product-modal">
      <div class="modal-header">
        <h2>{{ product?.name }}</h2>
        <button class="close-btn" @click="close">&times;</button>
      </div>
      
      <div class="modal-body">
        <div class="product-price">{{ formatCurrency(product?.price) }}</div>
        
        <!-- Sugar Level -->
        <div class="variant-group">
            <h3>Gula (Sugar)</h3>
            <div class="options-grid">
                <button 
                    v-for="opt in sugarOptions" 
                    :key="opt"
                    :class="{ active: sugarLevel === opt }"
                    @click="sugarLevel = opt"
                >
                    {{ opt }}
                </button>
            </div>
        </div>

        <!-- Ice Level -->
        <div class="variant-group">
            <h3>Es Batu (Ice)</h3>
            <div class="options-grid">
                <button 
                    v-for="opt in iceOptions" 
                    :key="opt"
                    :class="{ active: iceLevel === opt }"
                    @click="iceLevel = opt"
                >
                    {{ opt }}
                </button>
            </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="qty-control">
            <button @click="qty > 1 ? qty-- : null" :disabled="qty <= 1">-</button>
            <span>{{ qty }}</span>
            <button @click="qty++">+</button>
        </div>
        <button class="btn-add" @click="confirm">
            Tambah - {{ formatCurrency(totalPrice) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  product: Object
})

const emit = defineEmits(['close', 'add-to-cart'])

const qty = ref(1)
const sugarLevel = ref('Normal Sugar')
const iceLevel = ref('Normal Ice')

const sugarOptions = ['Normal Sugar', 'Less Sugar', 'No Sugar']
const iceOptions = ['Normal Ice', 'Less Ice', 'No Ice']

// Reset when modal opens
watch(() => props.isOpen, (val) => {
    if (val) {
        qty.value = 1
        sugarLevel.value = 'Normal Sugar'
        iceLevel.value = 'Normal Ice'
    }
})

const totalPrice = computed(() => {
    return (props.product?.price || 0) * qty.value
})

function formatCurrency(val) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

function close() {
    emit('close')
}

function confirm() {
    // Construct variants string
    const variants = []
    if (sugarLevel.value !== 'Normal Sugar') variants.push(sugarLevel.value)
    if (iceLevel.value !== 'Normal Ice') variants.push(iceLevel.value)
    
    emit('add-to-cart', {
        ...props.product,
        qty: qty.value,
        variants: variants.length > 0 ? variants.join(', ') : null
    })
    close()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  z-index: 200;
  display: flex;
  align-items: flex-end; /* Bottom sheet on mobile */
  justify-content: center;
}

.product-modal {
  background: #1e293b;
  width: 100%;
  max-width: 500px;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 1.5rem;
  color: white;
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.modal-header h2 { margin: 0; font-size: 1.4rem; }
.close-btn { background: none; border: none; font-size: 2rem; color: #94a3b8; cursor: pointer; }

.product-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
}

.variant-group { margin-bottom: 1.5rem; }
.variant-group h3 { font-size: 0.95rem; color: #cbd5e1; margin-bottom: 0.75rem; }

.options-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
}

.options-grid button {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: #cbd5e1;
    padding: 0.75rem 0.5rem;
    border-radius: 0.75rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.options-grid button.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}

.modal-footer {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.qty-control {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.1);
    border-radius: 1rem;
    padding: 0.25rem;
}

.qty-control button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
}
.qty-control span {
    width: 30px;
    text-align: center;
    font-weight: bold;
}

.btn-add {
    flex: 1;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
}

@keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
}

@media (min-width: 640px) {
    .modal-overlay {
        align-items: center;
    }
    .product-modal {
        border-radius: 1.5rem;
    }
}
</style>
