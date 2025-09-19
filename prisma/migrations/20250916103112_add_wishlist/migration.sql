/*
  Warnings:

  - A unique constraint covering the columns `[wishlistId,listingId]` on the table `WishlistItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Wishlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `WishlistItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wishlist" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WishlistItem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "WishlistItem_wishlistId_listingId_key" ON "WishlistItem"("wishlistId", "listingId");
