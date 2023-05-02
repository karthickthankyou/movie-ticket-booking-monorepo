-- CreateEnum
CREATE TYPE "ShowtimeStatus" AS ENUM ('POSTPONED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Showtime" ADD COLUMN     "status" "ShowtimeStatus";
