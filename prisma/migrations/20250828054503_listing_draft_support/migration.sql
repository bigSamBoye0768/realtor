-- CreateEnum
CREATE TYPE "ListingStatus" AS ENUM ('Draft', 'Published', 'Archived');

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_locationId_fkey";

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "status" "ListingStatus" NOT NULL DEFAULT 'Draft',
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "securityDeposit" DROP NOT NULL,
ALTER COLUMN "applicationFee" DROP NOT NULL,
ALTER COLUMN "photoUrls" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "amenities" SET DEFAULT ARRAY[]::"Amenity"[],
ALTER COLUMN "highlights" SET DEFAULT ARRAY[]::"Highlight"[],
ALTER COLUMN "occupancy" SET DEFAULT ARRAY[]::"OccupancyType"[],
ALTER COLUMN "beds" DROP NOT NULL,
ALTER COLUMN "baths" DROP NOT NULL,
ALTER COLUMN "squareFeet" DROP NOT NULL,
ALTER COLUMN "propertyType" DROP NOT NULL,
ALTER COLUMN "locationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "coordinates" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
