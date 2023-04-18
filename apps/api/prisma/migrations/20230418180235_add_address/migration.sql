/*
  Warnings:

  - You are about to drop the column `address` on the `Cinema` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cinema" DROP COLUMN "address";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cinemaId" INTEGER,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_cinemaId_key" ON "Address"("cinemaId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE SET NULL ON UPDATE CASCADE;
