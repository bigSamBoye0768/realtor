/*
  Warnings:

  - Made the column `beds` on table `Listing` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "bedrooms" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "guests" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "beds" SET NOT NULL,
ALTER COLUMN "beds" SET DEFAULT 0;
