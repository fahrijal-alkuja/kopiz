<template>
  <div id="receipt-template" class="hidden-on-screen">
    <div class="receipt">
      <div class="header">
        <h2>APPKOPZ</h2>
        <p>Jl. Kopi No. 1, Jakarta</p>
        <p>Telp: 0812-3456-7890</p>
        <div class="sperator">================================</div>
      </div>
      
      <div class="meta">
        <p>Tgl: {{ formatDate(transaction.date) }}</p>
        <p>No: #{{ transaction.id }}</p>
        <p>Kasir: {{ transaction.cashier || 'Barista' }}</p>
        <div class="sperator">--------------------------------</div>
      </div>

      <div class="items">
        <div v-for="(item, index) in transaction.items" :key="index" class="item-row">
          <div class="item-name">{{ item.qty }}x {{ item.name }}</div>
          <div class="item-total">{{ formatCurrency(item.total) }}</div>
        </div>
        <div class="sperator">--------------------------------</div>
      </div>

      <div class="summary">
        <div class="row">
          <span>Total</span>
          <span class="total-amount">{{ formatCurrency(transaction.total) }}</span>
        </div>
        <div class="row">
          <span>Bayar ({{ transaction.paymentMethod }})</span>
          <span>{{ formatCurrency(transaction.total) }}</span>
        </div>
        <!-- If change logic exists -->
        <!-- <div class="row">
          <span>Kembali</span>
          <span>{{ formatCurrency(0) }}</span>
        </div> -->
        <div class="sperator">================================</div>
      </div>

      <div class="footer">
        <p>Terima Kasih</p>
        <p>Selamat Menikmati!</p>
        <p>Wifi: KopiEnak / Pass: 123456</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transaction: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      date: new Date(),
      items: [],
      total: 0,
      paymentMethod: 'Cash'
    })
  }
})

function formatCurrency(val) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'numeric', year: '2-digit',
    hour: '2-digit', minute: '2-digit'
  })
}
</script>

<style scoped>
/* Screen styles: hide it */
.hidden-on-screen {
  display: none;
}

/* Print styles */
@media print {
  body * {
    visibility: hidden;
  }
  
  .hidden-on-screen, .hidden-on-screen * {
    visibility: visible;
    display: block;
  }

  .hidden-on-screen {
    position: absolute;
    left: 0;
    top: 0;
    width: 58mm; /* Standard Thermal Paper */
    font-family: 'Courier New', Courier, monospace; /* Monospace is best for receipts */
    font-size: 12px;
    color: black;
    background: white;
    padding: 0;
    margin: 0;
  }

  .receipt {
    width: 100%;
    padding-right: 2mm; /* Log margin */
  }

  h2 {
    font-size: 16px;
    margin: 0 0 5px 0;
    text-align: center;
  }

  p {
    margin: 2px 0;
  }

  .header, .footer {
    text-align: center;
    margin-bottom: 10px;
  }

  .sperator {
    margin: 5px 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .item-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  .total-amount {
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
