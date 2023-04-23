/*
  Warnings:

  - Changed the type of `genre` on the `Movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('ACTION', 'ADVENTURE', 'ANIMATION', 'COMEDY', 'CRIME', 'DOCUMENTARY', 'DRAMA', 'FAMILY', 'FANTASY', 'FILM_NOIR', 'HISTORY', 'HORROR', 'MUSIC', 'MYSTERY', 'ROMANCE', 'SCI_FI', 'SHORT', 'SPORT', 'THRILLER', 'WAR', 'WESTERN');

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genre",
ADD COLUMN     "genre" "Genre" NOT NULL;
