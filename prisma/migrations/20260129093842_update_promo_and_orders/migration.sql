-- AlterTable MenuItem (Idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'MenuItem' AND column_name = 'category') THEN
        ALTER TABLE "MenuItem" ADD COLUMN "category" TEXT NOT NULL DEFAULT 'Minuman';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'MenuItem' AND column_name = 'isRetail') THEN
        ALTER TABLE "MenuItem" ADD COLUMN "isRetail" BOOLEAN NOT NULL DEFAULT false;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'MenuItem' AND column_name = 'materialId') THEN
        ALTER TABLE "MenuItem" ADD COLUMN "materialId" INTEGER;
    END IF;
END $$;

-- AlterTable Sale (Idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Sale' AND column_name = 'costSnapshot') THEN
        ALTER TABLE "Sale" ADD COLUMN "costSnapshot" DOUBLE PRECISION NOT NULL DEFAULT 0;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Sale' AND column_name = 'discountAmount') THEN
        ALTER TABLE "Sale" ADD COLUMN "discountAmount" DOUBLE PRECISION NOT NULL DEFAULT 0;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Sale' AND column_name = 'orderId') THEN
        ALTER TABLE "Sale" ADD COLUMN "orderId" INTEGER;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Sale' AND column_name = 'promoId') THEN
        ALTER TABLE "Sale" ADD COLUMN "promoId" INTEGER;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Sale' AND column_name = 'transactionId') THEN
        ALTER TABLE "Sale" ADD COLUMN "transactionId" TEXT;
    END IF;
END $$;

-- AlterTable Shift (Idempotent)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'Shift' AND column_name = 'userId') THEN
        ALTER TABLE "Shift" ADD COLUMN "userId" INTEGER;
    END IF;
END $$;

-- CreateTable Order (Idempotent)
CREATE TABLE IF NOT EXISTS "Order" (
    "id" SERIAL NOT NULL,
    "transactionId" TEXT NOT NULL,
    "customerName" TEXT,
    "tableNumber" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable Promo (Idempotent)
CREATE TABLE IF NOT EXISTS "Promo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promo_pkey" PRIMARY KEY ("id")
);

-- CreateTable ActivityLog (Idempotent)
CREATE TABLE IF NOT EXISTS "ActivityLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "description" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex (Idempotent)
CREATE UNIQUE INDEX IF NOT EXISTS "Order_transactionId_key" ON "Order"("transactionId");
CREATE UNIQUE INDEX IF NOT EXISTS "Promo_name_key" ON "Promo"("name");
CREATE INDEX IF NOT EXISTS "Sale_date_idx" ON "Sale"("date");
CREATE INDEX IF NOT EXISTS "Sale_transactionId_idx" ON "Sale"("transactionId");

-- AddForeignKey (Idempotent Drop/Create)
DO $$
BEGIN
  -- MenuItem -> Material
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'MenuItem_materialId_fkey') THEN
    ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;

  -- Sale -> Promo
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'Sale_promoId_fkey') THEN
    ALTER TABLE "Sale" ADD CONSTRAINT "Sale_promoId_fkey" FOREIGN KEY ("promoId") REFERENCES "Promo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;

  -- Sale -> Order
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'Sale_orderId_fkey') THEN
    ALTER TABLE "Sale" ADD CONSTRAINT "Sale_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;

  -- Shift -> User
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'Shift_userId_fkey') THEN
    ALTER TABLE "Shift" ADD CONSTRAINT "Shift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
  
  -- ActivityLog -> User
  IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'ActivityLog_userId_fkey') THEN
    ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
