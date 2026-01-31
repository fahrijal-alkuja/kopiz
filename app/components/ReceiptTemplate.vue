<template>
  <Teleport to="body">
    <div v-if="transaction" id="receipt-template" class="print-only">
      <div class="receipt">
        <div class="header">
          <h2>Kopi Z</h2>
          <p class="subtitle">Premium Quality, Bold Character</p>
          <p class="contact">Telp: 0853-9346-4054</p>
          <div class="separator-double"></div>
        </div>
        
        <div class="meta">
          <div class="meta-row">
            <span>Tgl:</span>
            <span>{{ formatDate(transaction.date) }}</span>
          </div>
          <div class="meta-row">
            <span>No:</span>
            <span>#{{ formatId(transaction.id) }}</span>
          </div>
          <div class="meta-row">
            <span>Kasir:</span>
            <span>{{ transaction.cashier || 'Barista' }}</span>
          </div>
          <div class="separator-dashed"></div>
        </div>

        <div class="items">
          <div class="meta-row">
           <span>Item</span>  
           <span>Harga</span>
          </div>
           <div class="separator-dashed"></div>

          <div v-for="(item, index) in transaction.items" :key="index" class="item-row">
            <div class="item-name">{{ item.qty }}x {{ item.name }}</div>
            <div class="item-total">{{ formatCurrency(item.total) }}</div>
          </div>
          <div class="separator-dashed"></div>
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
          <div class="separator-double"></div>
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

function formatId(id) {
  if (!id) return ''
  // Shorten UUID to first 8 chars for cleaner receipt
  return String(id).substring(0, 8).toUpperCase()
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
    /* Use a crisp monospace font stack for better thermal printing */
    font-family: 'Consolas', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
    font-size: 11px; /* Optimal size for 58mm */
    line-height: 1.3;
    color: #000;
    font-weight: 600; /* Semi-bold for better contrast */
    padding-right: 2mm; /* Small padding to prevent cutting off */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* CSS Borders instead of text characters for cleaner lines */
  .separator-dashed {
    border-bottom: 1px dashed #000;
    margin: 6px 0;
    width: 100%;
  }

  .separator-double {
    border-bottom: 3px double #000; /* Double line effect */
    margin: 8px 0;
    width: 100%;
  }

  h2 {
    font-size: 18px;
    margin: 0 0 2px 0;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 10px;
    margin: 0;
    text-align: center;
    font-weight: normal;
  }

  .contact {
    font-size: 10px;
    margin: 2px 0 0 0;
    text-align: center;
  }

  .header, .footer {
    text-align: center;
    margin-bottom: 5px;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  .items {
    margin-bottom: 5px;
  }

  .item-row {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     margin-bottom: 4px;
   }
   
   .item-name {
     flex: 1;
     margin-right: 4px;
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
     font-weight: 800;
     font-size: 14px;
     margin-top: 4px;
   }
 
   .total-amount {
     font-weight: 800;
   }
}
</style>
