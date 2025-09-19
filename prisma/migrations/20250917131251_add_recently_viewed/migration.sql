/*
  Warnings:

  - A unique constraint covering the columns `[userId,listingId]` on the table `RecentlyViewed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RecentlyViewed_userId_listingId_key" ON "RecentlyViewed"("userId", "listingId");
