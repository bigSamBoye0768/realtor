-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "currentStep" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;
