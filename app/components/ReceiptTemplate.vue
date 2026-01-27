<template>
  <div id="receipt-template" class="hidden-on-screen">
    <div class="receipt">
      <div class="header">
        <h2>Kopi Z</h2>
        <p>Premium Quality, Bold Character</p>
        <p>Telp: 0853-9346-4054</p>
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
          <span>{{ transaction.cashProvided ? formatCurrency(transaction.cashProvided) : formatCurrency(transaction.total) }}</span>
        </div>
        
        <div class="row" v-if="transaction.change >= 0">
          <span>Kembali</span>
          <span>{{ formatCurrency(transaction.change || 0) }}</span>
        </div>
        <div class="sperator">================================</div>
      </div>

      <div class="footer">
        <p>Terima Kasih</p>
        <p>Selamat Menikmati!</p>
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



<!-- Global Print Styles (Must be non-scoped to affect body) -->
<style>
@media print {
  body * {
    visibility: hidden;
  }
  
  /* Ensure the receipts container is visible */
  #receipt-template, #receipt-template * {
    visibility: visible;
  }

  /* Reset layout for full page takeover */
  #receipt-template {
    position: absolute;
    left: 0;
    top: 0;
    width: 58mm; /* Fixed thermal width */
    margin: 0;
    padding: 0;
    background: white;
  }

  /* Hide default dashboard elements explicitly just in case */
  .dashboard-header, .pos-container, sidebar, nav, header {
    display: none !important;
  }
}
</style>

<style scoped>
/* Screen styles: hide it usually */
.hidden-on-screen {
  display: none;
}

@media print {
  .hidden-on-screen {
    display: block;
  }
  
  .receipt {
    width: 100%;
    padding-right: 2mm;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    color: black;
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
