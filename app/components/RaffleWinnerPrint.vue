<template>
  <Teleport to="body">
    <div v-if="isOpen" id="winner-print-template" class="print-only">
      <div class="receipt">
        <div class="header">
          <h2>Kopi Z</h2>
          <p class="subtitle">PEMENANG UNDIAN</p>
          <div class="separator-double"></div>
        </div>

        <div class="content">
            <div class="label">PERIODE</div>
            <div class="value-large">{{ raffleName }}</div>
            
            <div class="separator-dashed"></div>

            <div class="label">TANGGAL UNDI</div>
            <div class="value">{{ formatDate(new Date()) }}</div>
            
            <div class="separator-double"></div>

            <div class="winner-box">
                <div class="label">SELAMAT KEPADA:</div>
                <div class="winner-name">{{ winnerName }}</div>
                <div class="winner-id">No. Struk: {{ formatId(transactionId) }}</div>
            </div>

            <div class="separator-double"></div>
        </div>

        <div class="footer">
          <p>Harap simpan bukti ini untuk</p>
          <p>klaim hadiah.</p>
          <p>*** SAH ***</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  raffleName: String,
  winnerName: String,
  transactionId: String,
  prize: String
})

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

function formatId(id) {
  if (!id) return ''
  return String(id).substring(0, 8).toUpperCase()
}
</script>

<style scoped>
.print-only {
  display: none;
}

@media print {
  .print-only {
    display: block;
  }

  body > * {
    display: none !important;
  }

  body > #winner-print-template {
    display: block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 58mm;
    background: white;
  }
  
  @page {
    size: 58mm auto;
    margin: 0;
  }

  .receipt {
    width: 100%;
    font-family: 'Consolas', monospace;
    font-size: 12px;
    padding-right: 2mm;
    text-align: center;
  }

  .separator-dashed {
    border-bottom: 1px dashed #000;
    margin: 8px 0;
  }

  .separator-double {
    border-bottom: 3px double #000;
    margin: 10px 0;
  }

  h2 {
    font-size: 20px;
    margin: 0;
    font-weight: 800;
  }

  .subtitle {
    font-size: 14px;
    font-weight: bold;
    margin: 4px 0;
  }

  .label {
    font-size: 10px;
    color: #555;
    margin-bottom: 2px;
  }

  .value {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .value-large {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .winner-box {
    border: 2px solid #000;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
  }

  .winner-name {
    font-size: 18px;
    font-weight: 900;
    margin: 5px 0;
    text-transform: uppercase;
  }

  .winner-id {
    font-family: monospace;
    font-size: 14px;
    background: #000;
    color: #fff;
    padding: 2px 4px;
    display: inline-block;
  }
}
</style>
