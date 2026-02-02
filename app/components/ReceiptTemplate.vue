<template>
  <Teleport to="body">
    <div v-if="transaction" id="receipt-template" class="print-only">
      <div class="receipt">
        <div class="header">
          <!-- Logo removed for better thermal clarity, using large text instead -->
          <h2 class="brand-name">KOPI Z</h2>
          <p class="subtitle">Premium Quality, Bold Character</p>
          <p class="contact">Telp: 0853-9346-4054</p>
        </div>
        
        <div class="divider-solid"></div>

        <div class="meta">
          <div class="meta-row">
            <span>Tgl : {{ formatDate(transaction.date) }}</span>
          </div>
          <div class="meta-row">
            <span>No  : #{{ formatId(transaction.id) }}</span>
          </div>
          <div class="meta-row">
            <span>Kasir: {{ transaction.cashier || 'Barista' }}</span>
          </div>
        </div>

        <div class="divider-solid"></div>

        <div class="items">
          <div class="meta-row header-row">
            <span>ITEM</span>
            <span>HARGA</span>
          </div>
          <div class="divider-dashed"></div>
          <div v-for="(item, index) in transaction.items" :key="index" class="item-row">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-details">
              <span class="qty">{{ item.qty }}x</span>
              <span class="price">{{ formatCurrency(item.total) }}</span>
            </div>
          </div>
        </div>

        <div class="divider-solid"></div>

        <div class="summary">
          <div class="row total-row">
            <span>TOTAL</span>
            <span class="total-amount">{{ formatCurrency(transaction.total) }}</span>
          </div>
          
          <div class="row">
            <span>Bayar ({{ transaction.paymentMethod }})</span>
            <span>{{ transaction.cashProvided ? formatCurrency(transaction.cashProvided) : formatCurrency(transaction.total) }}</span>
          </div>
          
          <div class="row" v-if="transaction.change >= 0">
            <span>Kembali</span>
            <span>{{ formatCurrency(transaction.change || 0) }}</span>
          </div>
        </div>

        <div class="divider-double"></div>

        <div class="footer">
          <p>Terima Kasih</p>
          <p>Selamat Menikmati!</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  transaction: {
    type: Object,
    required: false,
    default: null
  }
})

function formatCurrency(val) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'numeric', year: '2-digit',
    hour: '2-digit', minute: '2-digit'
  })
}

function formatId(id) {
  if (!id) return ''
  return String(id).substring(0, 8).toUpperCase()
}
</script>

<style>
@media print {
  body > * {
    display: none !important;
  }
  
  body > #receipt-template {
    display: block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 58mm;
    margin: 0;
    padding: 0;
    background: white;
  }
  
  @page {
    size: 58mm auto; 
    margin: 0;
  }
}
</style>

<style scoped>
.print-only {
  display: none;
}

@media print {
  .print-only {
    display: block;
  }
  
  .receipt {
    width: 100%;
    /* Modern, readable font stack */
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 10px;
    line-height: 1.4;
    color: #000;
    padding-right: 2mm;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 10px;
  }

  .brand-name {
    font-size: 26px; /* Increased from 20px for logo-like impact */
    margin: 0;
    font-weight: 900; /* Extra bold */
    text-transform: uppercase;
    letter-spacing: 2px; /* Wider spacing for elegance */
    line-height: 1.2;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Ensure clean sans-serif */
  }

  .subtitle {
    font-size: 9px;
    margin: 2px 0;
    font-style: italic;
  }

  .contact {
    font-size: 9px;
    margin: 0;
  }

  /* Dividers */
  .divider-solid {
    border-bottom: 1px solid #000;
    margin: 8px 0;
    width: 100%;
  }

  .divider-double {
    border-bottom: 3px double #000;
    margin: 10px 0;
    width: 100%;
  }

  .divider-dashed {
    border-bottom: 1px dashed #000;
    margin: 4px 0 8px 0;
    width: 100%;
  }

  /* Meta Info */
  .meta {
    margin-bottom: 8px;
  }
  
  .meta-row {
    font-size: 10px;
  }

  .header-row {
    font-weight: bold;
    font-size: 9px;
    margin-bottom: 2px;
  }

  /* Items */
  .items {
    margin-bottom: 8px;
  }

  .item-row {
    margin-bottom: 4px;
    /* Optional: separator between items for clarity */
  }

  .item-name {
    font-weight: 600;
    font-size: 11px;
    margin-bottom: 2px;
  }

  .item-details {
    display: flex;
    justify-content: space-between;
    padding-left: 0; /* Keep aligned left */
  }

  .qty {
    font-weight: bold;
  }

  /* Summary */
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  .total-row {
    font-size: 14px;
    font-weight: 900;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  /* Footer */
  .footer {
    text-align: center;
    font-size: 10px;
    margin-top: 10px;
    font-weight: 500;
  }
  
  .footer p {
    margin: 2px 0;
  }
}
</style>
