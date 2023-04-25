/*
  Warnings:

  - A unique constraint covering the columns `[startTime,screenId]` on the table `Showtime` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Showtime_startTime_screenId_key" ON "Showtime"("startTime", "screenId");
