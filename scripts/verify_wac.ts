import prisma from '../server/utils/db'

async function main() {
    console.log('Starting WAC Verification...')
    const materialName = 'Test Material WAC ' + Date.now()
    
    try {
        // 1. Create Initial Material
        const material = await prisma.material.create({
            data: {
                name: materialName,
                unit: 'pcs',
                stock: 10,
                costPerUnit: 10000,
                minStock: 5
            }
        })
        console.log('Created Material:', { 
            id: material.id, 
            stock: material.stock, 
            cost: material.costPerUnit 
        })

        // 2. Perform Purchase via API
        const purchasePayload = {
            materialId: material.id,
            quantity: 10,
            pricePerUnit: 12000,
            supplier: 'Test Supplier'
        }

        console.log('Sending Purchase Request:', purchasePayload)
        
        const response = await fetch('http://localhost:3000/api/inventory/purchase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(purchasePayload)
        })
        
        if (!response.ok) {
            const err = await response.text()
            throw new Error(`API Error ${response.status}: ${err}`)
        }
        
        const result = await response.json()
        console.log('Purchase Response:', result)

        // 3. Verify Result
        const updatedMaterial = await prisma.material.findUnique({
             where: { id: material.id }
        })
        
        if (!updatedMaterial) throw new Error('Failed to fetch updated material')
        
        console.log('Updated Material:', {
            stock: updatedMaterial.stock,
            cost: updatedMaterial.costPerUnit
        })
        
        // Expected Logic:
        // Old: 10 * 10000 = 100,000
        // New: 10 * 12000 = 120,000
        // Total Value: 220,000
        // Total Stock: 20
        // New Cost: 11,000
        
        const expectedCost = 11000
        
        // Calculate difference
        const diff = Math.abs((updatedMaterial?.costPerUnit || 0) - expectedCost)
        
        if (updatedMaterial && diff < 0.01) {
             console.log('✅ WAC Calculation CORRECT!')
        } else {
             console.error(`❌ WAC Calculation FAILED. Expected ${expectedCost}, got ${updatedMaterial?.costPerUnit}`)
        }
        
    } catch (e) {
        console.error('Test Failed:', e)
    } finally {
        // Cleanup
        // We catch inside finally to make sure we don't crash cleanup if vars are undefined, 
        // but we rely on 'materialName' which is distinct enough.
        console.log('Cleaning up...')
        const mat = await prisma.material.findFirst({ where: { name: materialName } })
        if (mat) {
             await prisma.materialPurchase.deleteMany({ where: { materialId: mat.id } })
             await prisma.materialLog.deleteMany({ where: { materialId: mat.id } })
             // Expense cleanup is tricky as it doesn't link by ID, but description contains name
             await prisma.expense.deleteMany({ where: { description: { contains: materialName } } })
             await prisma.material.delete({ where: { id: mat.id } })
        }
        console.log('Cleanup done.')
        process.exit(0)
    }
}

main()
