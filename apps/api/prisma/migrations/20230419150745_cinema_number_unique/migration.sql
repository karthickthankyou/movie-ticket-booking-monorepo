/*
  Warnings:

  - A unique constraint covering the columns `[cinemaId,number]` on the table `Screen` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `Screen` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ScreenType" AS ENUM ('STANDARD', 'IMAX', 'DOLBY_CINEMA', 'RPX', 'SCREENX', 'PLF');

-- AlterTable
ALTER TABLE "Screen" ADD COLUMN     "type" "ScreenType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Screen_cinemaId_number_key" ON "Screen"("cinemaId", "number");
