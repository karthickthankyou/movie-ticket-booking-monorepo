/*
  Warnings:

  - You are about to drop the column `cinemaId` on the `Manager` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Manager" DROP CONSTRAINT "Manager_cinemaId_fkey";

-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "cinemaId";

-- CreateTable
CREATE TABLE "_CinemaToManager" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CinemaToManager_AB_unique" ON "_CinemaToManager"("A", "B");

-- CreateIndex
CREATE INDEX "_CinemaToManager_B_index" ON "_CinemaToManager"("B");

-- AddForeignKey
ALTER TABLE "_CinemaToManager" ADD CONSTRAINT "_CinemaToManager_A_fkey" FOREIGN KEY ("A") REFERENCES "Cinema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CinemaToManager" ADD CONSTRAINT "_CinemaToManager_B_fkey" FOREIGN KEY ("B") REFERENCES "Manager"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
