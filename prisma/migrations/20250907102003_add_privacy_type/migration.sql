-- CreateEnum
CREATE TYPE "PrivacyType" AS ENUM ('EntirePlace', 'Room', 'SharedRoom');

-- CreateEnum
CREATE TYPE "BookingType" AS ENUM ('REQUEST', 'INSTANT');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "bookingType" "BookingType",
ADD COLUMN     "privacyType" "PrivacyType";
