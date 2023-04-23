/*
  Warnings:

  - You are about to drop the column `seatId` on the `Booking` table. All the data in the column will be lost.
  - The primary key for the `Seat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Seat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[screenId,row,column,showtimeId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_seatId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "seatId",
ADD COLUMN     "column" INTEGER,
ADD COLUMN     "row" INTEGER,
ADD COLUMN     "screenId" INTEGER;

-- AlterTable
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD CONSTRAINT "Seat_pkey" PRIMARY KEY ("screenId", "row", "column");

-- CreateIndex
CREATE INDEX "seatIndex" ON "Booking"("screenId", "row", "column");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_screenId_row_column_showtimeId_key" ON "Booking"("screenId", "row", "column", "showtimeId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_screenId_row_column_fkey" FOREIGN KEY ("screenId", "row", "column") REFERENCES "Seat"("screenId", "row", "column") ON DELETE SET NULL ON UPDATE CASCADE;
