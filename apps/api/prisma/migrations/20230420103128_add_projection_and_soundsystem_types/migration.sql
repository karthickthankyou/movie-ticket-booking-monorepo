/*
  Warnings:

  - You are about to drop the column `type` on the `Screen` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ProjectionType" AS ENUM ('STANDARD', 'IMAX', 'DOLBY_CINEMA', 'RPX', 'SCREENX', 'PLF');

-- CreateEnum
CREATE TYPE "SoundSystemType" AS ENUM ('MONO', 'STEREO', 'DOLBY_DIGITAL', 'DOLBY_ATMOS', 'DTS', 'DTS_X', 'SONY_SDDS', 'AURO_3D', 'IMAX_ENHANCED');

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "type",
ADD COLUMN     "projectionType" "ProjectionType" NOT NULL DEFAULT 'STANDARD',
ADD COLUMN     "soundSystemType" "SoundSystemType" NOT NULL DEFAULT 'DOLBY_ATMOS';

-- DropEnum
DROP TYPE "ScreenType";
