/*
  Warnings:

  - Made the column `column` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `row` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `screenId` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_screenId_row_column_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "column" SET NOT NULL,
ALTER COLUMN "row" SET NOT NULL,
ALTER COLUMN "screenId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_screenId_row_column_fkey" FOREIGN KEY ("screenId", "row", "column") REFERENCES "Seat"("screenId", "row", "column") ON DELETE RESTRICT ON UPDATE CASCADE;
