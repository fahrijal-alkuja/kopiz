<template>
  <div class="qr-gen-container">
    <div class="no-print">
        <h1>🖨️ Cetak QR Code Meja</h1>
        <p>Generate QR Code untuk ditempel di meja pelanggan.</p>
        <div style="background: rgba(255, 255, 0, 0.1); border: 1px solid yellow; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem; margin-top: 0.5rem; color: #fbbf24;">
            💡 <b>Tips:</b> Buka halaman ini menggunakan <b>IP Address</b> (misal: <code>192.168.1.5:3000</code>) agar QR Code bisa discan dari HP lain. Jika akses pakai <code>localhost</code>, QR tidak bisa dibuka di HP.
        </div>
        
        <div class="controls">
            <button @click="generateQRs" class="btn-primary">Generate Ulang</button>
            <button @click="exportPDF" class="btn-secondary" style="background: var(--color-danger); border: none; color: white;">💾 Simpan PDF</button>
        </div>
    </div>

    <!-- Print Area -->
    <div class="qr-grid">
        <div v-for="qr in qrCodes" :key="qr.table" class="qr-card">
            <div class="qr-header">Scan untuk Pesan</div>
            <img :src="qr.dataUrl" class="qr-image" />
            <div class="qr-label">{{ qr.label }}</div>
            <div class="qr-footer">KopiZ</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import QRCode from 'qrcode'
import jsPDF from 'jspdf'

const qrCodes = ref([])

onMounted(() => {
    generateQRs()
})
 
async function generateQRs() {
    qrCodes.value = []
    const baseUrl = window.location.origin + '/order'
    
    // Global QR Only
    try {
        const globalData = await QRCode.toDataURL(baseUrl, { width: 300, margin: 2 })
        qrCodes.value.push({ table: 'GLOBAL', label: 'QR PEMESANAN', dataUrl: globalData })
    } catch (e) { console.error(e) }
}

function exportPDF() {
    const doc = new jsPDF()
    let x = 10
    let y = 10
    const cardWidth = 60
    const cardHeight = 80
    const margin = 10
    const pageWidth = doc.internal.pageSize.getWidth()
    
    qrCodes.value.forEach((qr, index) => {
        // Draw Border
        doc.setDrawColor(0)
        doc.setLineWidth(0.5)
        doc.rect(x, y, cardWidth, cardHeight)
        
        // Header
        doc.setFontSize(10)
        doc.setFont("helvetica", "bold")
        doc.text("SCAN UNTUK PESAN", x + (cardWidth/2), y + 8, { align: 'center' })
        
        // QR Image
        doc.addImage(qr.dataUrl, 'PNG', x + 5, y + 12, cardWidth - 10, cardWidth - 10)
        
        // Label
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.text(String(qr.label), x + (cardWidth/2), y + cardHeight - 12, { align: 'center' })
        
        // Footer
        doc.setFontSize(8)
        doc.setFont("helvetica", "normal")
        doc.text("KopiZ", x + (cardWidth/2), y + cardHeight - 5, { align: 'center' })
    })
    
    doc.save("KopiZ-QR-Code.pdf")
}
</script>


<style scoped>
.qr-gen-container {
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.controls {
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    margin: 2rem 0;
    padding: 1rem;
    background: var(--color-surface);
    border-radius: 1rem;
    border: 1px solid var(--color-border);
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-group input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
    background: rgba(0,0,0,0.2);
    color: white;
}

.btn-primary, .btn-secondary {
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    border: none;
}

.btn-primary {
    background: var(--color-primary);
    color: white;
}

.btn-secondary {
    background: var(--color-surface-soft);
    color: var(--color-text);
    border: 1px solid var(--color-border);
}

.qr-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
}

.qr-card {
    border: 2px solid black;
    padding: 1rem;
    text-align: center;
    background: white;
    color: black;
    border-radius: 1rem;
    page-break-inside: avoid;
}

.qr-header {
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.qr-image {
    width: 100%;
    height: auto;
    display: block;
}

.qr-label {
    font-weight: 900;
    font-size: 1.5rem;
    margin-top: 0.5rem;
}

.qr-footer {
    font-size: 0.8rem;
    margin-top: 0.25rem;
    opacity: 0.7;
}

@media print {
    .no-print {
        display: none;
    }
    
    body {
        background: white;
        color: black;
    }
    
    .qr-gen-container {
        padding: 0;
        margin: 0;
        max-width: none;
    }
    
    .qr-grid {
        display: block;
    }
    
    .qr-card {
        float: left;
        width: 45%;
        margin: 2.5%;
        border: 2px solid black;
    }
}
</style>
