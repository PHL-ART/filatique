/*
  Warnings:

  - You are about to drop the column `iconURL` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `releaseId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_releaseId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "iconURL",
DROP COLUMN "link",
DROP COLUMN "releaseId";

-- CreateTable
CREATE TABLE "ListenLinks" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "releaseId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "ListenLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListenLinks" ADD CONSTRAINT "ListenLinks_releaseId_fkey" FOREIGN KEY ("releaseId") REFERENCES "Release"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListenLinks" ADD CONSTRAINT "ListenLinks_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
