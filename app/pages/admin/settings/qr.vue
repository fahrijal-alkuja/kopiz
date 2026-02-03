<template>
  <div class="qr-gen-container" :class="{ 'poster-mode': showPoster }">
    
    <!-- CONTROLS (Hidden when printing) -->
    <div class="no-print control-panel">
        <div class="header-section">
            <h1>🖨️ Generator QR & Poster</h1>
            <p>Buat QR Code meja atau Poster promosi kustom.</p>
        </div>

        <div class="mode-switcher">
            <button @click="showPoster = false" :class="{ active: !showPoster }">QR Biasa (Grid)</button>
            <button @click="showPoster = true" :class="{ active: showPoster }">Poster Promo ✨</button>
        </div>

        <div v-if="!showPoster" class="tips-box">
            💡 <b>Tips:</b> Gunakan IP Address agar bisa discan HP lain.
        </div>
        
        <div class="actions">
            <button v-if="!showPoster" @click="generateQRs" class="btn-primary">Generate Ulang</button>
            <button v-if="!showPoster" @click="exportPDF" class="btn-secondary danger">💾 Simpan PDF</button>
            
            <button v-if="showPoster" @click="downloadPosterPDF" class="btn-primary" :disabled="isGeneratingPdf">
                {{ isGeneratingPdf ? '⏳ Memproses...' : '⬇️ Download PDF' }}
            </button>
        </div>
    </div>

    <!-- MODE 1: STANDARD QR GRID -->
    <div v-if="!showPoster" class="qr-grid">
        <div v-for="qr in qrCodes" :key="qr.table" class="qr-card">
            <div class="qr-header">Scan untuk Pesan</div>
            <img :src="qr.dataUrl" class="qr-image" />
            <div class="qr-label">{{ qr.label }}</div>
            <div class="qr-footer">KopiZ</div>
        </div>
    </div>

    <!-- MODE 2: POSTER CANVAS -->
    <div v-show="showPoster" class="poster-wrapper">
        <div class="poster-canvas" id="poster">
            <!-- Header Decoration -->
            <div class="glow-bg"></div>
            
            <!-- Main Content -->
            <div class="content">
                <div class="brand">
                    <img src="/logo.jpg" alt="KopiZ Logo" class="brand-logo" />
                    <h1 class="bounce-in">KopiZ</h1>
                    <p>Freshly Brewed for You</p>
                </div>

                <div class="headline">
                    <h2>MALAS ANTRI?</h2>
                    <h2 class="highlight">SCAN & PESAN</h2>
                    <h2>DARI MEJA!</h2>
                </div>

                <!-- QR Section -->
                <div class="qr-frame">
                    <div class="qr-border">
                        <img v-if="globalQrUrl" :src="globalQrUrl" class="qr-img" alt="Scan Me" />
                    </div>
                    <div class="scan-me">SCAN ME</div>
                </div>

                <div class="features">
                    <div class="feature-pill">🍽️ Dine In</div>
                    <div class="feature-pill">🛍️ Takeaway</div>
                    <div class="feature-pill">🛵 Delivery</div>
                </div>

                <div class="footer">
                    <p>Buka Kamera HP atau Aplikasi QR Scanner</p>
                    <p class="url-text">{{ appUrl }}</p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import QRCode from 'qrcode'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const qrCodes = ref([])
const showPoster = ref(false)
const globalQrUrl = ref('')
const appUrl = ref('')
const isGeneratingPdf = ref(false)

onMounted(() => {
    generateQRs()
})
 
async function generateQRs() {
    qrCodes.value = []
    appUrl.value = window.location.origin + '/order'
    
    // Global QR Only
    try {
        const globalData = await QRCode.toDataURL(appUrl.value, { 
            width: 600, 
            margin: 2,
            color: { dark: '#000000', light: '#ffffff' }
        })
        
        // For Grid
        qrCodes.value.push({ table: 'GLOBAL', label: 'QR PEMESANAN', dataUrl: globalData })

        // For Poster (Premium Gold/Black Version)
        // Using a rich dark black/bronze for the QR to match the luxury theme
        globalQrUrl.value = await QRCode.toDataURL(appUrl.value, { 
            width: 600, 
            margin: 2,
            color: { dark: '#1a1a1a', light: '#ffffff' }
        })

    } catch (e) { console.error(e) }
}

function exportPDF() {
    const doc = new jsPDF()
    let x = 10
    let y = 10
    const cardWidth = 60
    const cardHeight = 80
    
    qrCodes.value.forEach((qr, index) => {
        doc.setDrawColor(0)
        doc.setLineWidth(0.5)
        doc.rect(x, y, cardWidth, cardHeight)
        
        doc.setFontSize(10)
        doc.setFont("helvetica", "bold")
        doc.text("SCAN UNTUK PESAN", x + (cardWidth/2), y + 8, { align: 'center' })
        
        doc.addImage(qr.dataUrl, 'PNG', x + 5, y + 12, cardWidth - 10, cardWidth - 10)
        
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.text(String(qr.label), x + (cardWidth/2), y + cardHeight - 12, { align: 'center' })
        
        doc.setFontSize(8)
        doc.setFont("helvetica", "normal")
        doc.text("KopiZ", x + (cardWidth/2), y + cardHeight - 5, { align: 'center' })
    })
    
    doc.save("KopiZ-QR-Grid.pdf")
}

async function downloadPosterPDF() {
    if (isGeneratingPdf.value) return
    isGeneratingPdf.value = true
    
    // Slight delay to ensure DOM is ready
    await new Promise(r => setTimeout(r, 100))

    const posterElement = document.getElementById('poster')
    if (!posterElement) {
        console.error("Poster element not found")
        isGeneratingPdf.value = false
        return
    }

    try {
        const canvas = await html2canvas(posterElement, {
            scale: 2, // High resolution
            useCORS: true,
            backgroundColor: null // Transparent logic if needed, but poster has bg
        })

        const imgData = canvas.toDataURL('image/png')
        
        // A4 Paper Size (210mm x 297mm)
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pageHeight = pdf.internal.pageSize.getHeight()
        
        // Calculate Aspect Ratio to Fit
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const ratio = imgWidth / imgHeight
        
        let pdfImgWidth = pageWidth
        let pdfImgHeight = pageWidth / ratio
        
        // Center vertically if it fits
        let yPos = (pageHeight - pdfImgHeight) / 2
        if (pdfImgHeight > pageHeight) {
            // Scale by height if too tall
             pdfImgHeight = pageHeight
             pdfImgWidth = pageHeight * ratio
             yPos = 0
        }

        pdf.addImage(imgData, 'PNG', (pageWidth - pdfImgWidth) / 2, yPos, pdfImgWidth, pdfImgHeight)
        pdf.save('KopiZ-Poster-Promo.pdf')

    } catch (error) {
        console.error('Error generating PDF:', error)
        alert('Gagal membuat PDF. Coba lagi.')
    } finally {
        isGeneratingPdf.value = false
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');

.qr-gen-container {
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Outfit', sans-serif; /* Use Outfit for everything here for consistency */
}

/* CONTROL PANEL */
.control-panel {
    background: var(--color-surface);
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    margin-bottom: 2rem;
}

.header-section h1 { margin: 0; font-size: 1.5rem; }
.header-section p { margin: 0.5rem 0 1rem; color: var(--color-text-muted); }

.mode-switcher {
    display: flex;
    gap: 0.5rem;
    background: rgba(0,0,0,0.2);
    padding: 0.25rem;
    border-radius: 0.5rem;
    width: fit-content;
    margin-bottom: 1.5rem;
}

.mode-switcher button {
    padding: 0.5rem 1.5rem;
    border: none;
    background: transparent;
    color: var(--color-text-muted);
    font-weight: 600;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: all 0.2s;
}

.mode-switcher button.active {
    background: var(--color-primary);
    color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.tips-box {
    background: rgba(251, 191, 36, 0.1); 
    border: 1px solid #fbbf24;
    padding: 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: #fbbf24;
    margin-bottom: 1rem;
}

.actions {
    display: flex;
    gap: 1rem;
}

.btn-primary { background: var(--color-primary); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: bold; cursor: pointer; }
.btn-secondary { background: var(--color-surface); border: 1px solid var(--color-border); color: var(--color-text); padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: bold; cursor: pointer; }
.btn-secondary.danger { background: var(--color-danger); color: white; border: none; }


/* GRID STYLES */
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
    box-shadow: 0 4px 6px rgba(255,255,255,0.1);
}
.qr-header { font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; text-transform: uppercase; }
.qr-image { width: 100%; height: auto; display: block; }
.qr-label { font-weight: 900; font-size: 1.5rem; margin-top: 0.5rem; }
.qr-footer { font-size: 0.8rem; margin-top: 0.25rem; opacity: 0.7; }


/* POSTER STYLES (Luxury Coffee Theme) */
.poster-wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem;
    background: #121212; /* Dark bg preview */
    border-radius: 1rem;
    border: 1px solid var(--glass-border);
}

.poster-canvas {
    width: 100%;
    max-width: 450px; 
    aspect-ratio: 1/1.414;
    /* Luxury Dark Gradient */
    background: radial-gradient(circle at top, #2a2a2a 0%, #121212 100%);
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2.5rem;
    border: 8px solid #c5a059; /* Gold Border */
    color: white;
}

.glow-bg {
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    /* Golden Glow */
    background: radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, transparent 60%);
    pointer-events: none;
}

.content { position: relative; z-index: 10; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; align-items: center; }


.brand-logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #c5a059; /* Gold Border */
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    margin-bottom: 0.25rem;
}

.brand h1 {
    font-size: 2.2rem;
    margin: 0;
    /* Gold Gradient Text */
    background: linear-gradient(to right, #edc967, #c5a059, #edc967);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900; letter-spacing: -1px;
    text-shadow: 0 2px 10px rgba(197, 160, 89, 0.3);
}
.brand p { color: #a0a0a0; margin: 0; font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; }

.headline h2 { font-size: 1.8rem; line-height: 1.2; margin: 0; font-weight: 800; color: #e5e5e5; }
.headline .highlight { 
    color: #c5a059; /* Gold Highlight */
    font-size: 2.2rem; 
    text-transform: uppercase;
}

.qr-frame { position: relative; margin: 1rem 0; }
.qr-border {
    background: white; padding: 0.75rem; border-radius: 1.25rem;
    box-shadow: 0 0 30px rgba(197, 160, 89, 0.4); /* Gold Shadow */
    transform: rotate(-3deg);
    transition: transform 0.3s;
}
.qr-img { width: 180px; height: 180px; display: block; }
.scan-me {
    position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%);
    background: #c5a059; /* Gold Button */
    color: #000;
    padding: 0.4rem 1.5rem;
    border-radius: 50px; font-weight: 900; font-size: 1rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4); white-space: nowrap;
    border: 2px solid white;
}

.features { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
.feature-pill { 
    background: rgba(197, 160, 89, 0.1); 
    padding: 0.4rem 0.8rem; border-radius: 8px; 
    font-weight: 600; 
    border: 1px solid rgba(197, 160, 89, 0.3); 
    color: #edc967;
    font-size: 0.9rem; 
}

.footer { border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 1rem; width: 100%; }
.url-text { font-family: monospace; opacity: 0.5; margin-top: 0.5rem; font-size: 0.9rem; letter-spacing: 1px; }

/* PRINT SETTINGS */
@media print {
    /* Hide Navbar/Sidebar if possible (Assuming they have 'no-print' class or we force it) */
    .no-print, header, nav, aside { display: none !important; }
    
    .qr-gen-container { 
        padding: 0; margin: 0; max-width: none; 
        background: white; /* Default background for compatibility */
    }

    /* IF POSTER MODE IS ACTIVE */
    .qr-gen-container.poster-mode {
        width: 100vw; height: 100vh;
        display: flex; justify-content: center; align-items: center;
        background: white; /* Ensure paper is white */
    }

    .qr-gen-container.poster-mode .poster-wrapper {
        border: none; padding: 0; background: none;
        width: 100%; height: 100%;
        align-items: center;
    }

    .poster-canvas {
        box-shadow: none;
        width: 100%; height: 100%; max-width: 100%;
        border-radius: 0; border: none;
        -webkit-print-color-adjust: exact; print-color-adjust: exact;
    }

    /* IF GRID MODE IS ACTIVE */
    .qr-gen-container:not(.poster-mode) .qr-grid {
        display: block;
    }
    .qr-gen-container:not(.poster-mode) .qr-card {
        float: left; width: 45%; margin: 2.5%; 
        border: 2px solid black; break-inside: avoid;
    }
}
</style>
