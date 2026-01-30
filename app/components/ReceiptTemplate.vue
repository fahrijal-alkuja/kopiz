<template>
  <Teleport to="body">
    <div v-if="transaction" id="receipt-template" class="print-only">
      <div class="receipt">
        <div class="header">
          <h2>Kopi Z</h2>
          <p>Premium Quality, Bold Character</p>
          <p>Telp: 0853-9346-4054</p>
          <div class="separator">================================</div>
        </div>
        
        <div class="meta">
          <p>Tgl: {{ formatDate(transaction.date) }}</p>
          <p>No: #{{ transaction.id }}</p>
          <p>Kasir: {{ transaction.cashier || 'Barista' }}</p>
          <div class="separator">--------------------------------</div>
        </div>

        <div class="items">
          <div v-for="(item, index) in transaction.items" :key="index" class="item-row">
            <div class="item-name">{{ item.qty }}x {{ item.name }}</div>
            <div class="item-total">{{ formatCurrency(item.total) }}</div>
          </div>
          <div class="separator">--------------------------------</div>
        </div>

        <div class="summary">
          <div class="row total-row">
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
          <div class="separator">================================</div>
        </div>

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
</script>

<style>
/* 
  Global Print Styles 
  Must use Teleport to body so we can hide everything else effectively 
*/

@media print {
  /* 1. Hide everything on the body by default */
  body > * {
    display: none !important;
  }
  
  /* 2. Show ONLY the receipt container (which is Teleported to become a direct child of body) */
  body > #receipt-template {
    display: block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 58mm; /* Standard Thermal Paper Width */
    margin: 0;
    padding: 0;
    background: white;
  }
  
  /* 3. Reset page margins to zero to avoid browser headers/footers pushing content */
  @page {
    size: 58mm auto; 
    margin: 0;
  }
}
</style>

<style scoped>
/* Screen styles: Hidden by default */
.print-only {
  display: none;
}

@media print {
  /* On print media, we ensure the container itself block is visible (parent visibility handled by global query above) */
  .print-only {
    display: block;
  }
  
  .receipt {
    width: 100%;
    font-family: 'Courier New', Courier, monospace; /* Monospace is best for alignment */
    font-size: 10px; /* Small font for 58mm */
    color: black;
    line-height: 1.2;
    padding-right: 2mm; /* Small padding */
  }

  h2 {
    font-size: 14px;
    margin: 0 0 4px 0;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }

  p {
    margin: 2px 0;
    font-size: 10px;
  }

  .header, .footer {
    text-align: center;
    margin-bottom: 8px;
  }

  .separator {
    margin: 4px 0;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
  }

  .items {
    margin-bottom: 8px;
  }

  .item-row {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     margin-bottom: 4px;
   }
   
   .item-name {
     flex: 1;
     margin-right: 8px;
     /* Allow wrapping for long names */
     white-space: normal; 
   }
   
   .item-total {
     white-space: nowrap;
   }
 
   .row {
     display: flex;
     justify-content: space-between;
     margin-bottom: 2px;
   }
   
   .total-row {
     font-weight: bold;
     font-size: 12px;
     margin-top: 4px;
   }
 
   .total-amount {
     font-weight: bold;
   }
}
</style>
