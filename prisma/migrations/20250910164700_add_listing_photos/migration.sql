/*
  Warnings:

  - You are about to drop the column `photoUrls` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "photoUrls";

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isCover" BOOLEAN NOT NULL DEFAULT false,
    "position" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Photo_listingId_idx" ON "Photo"("listingId");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
