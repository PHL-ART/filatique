-- CreateEnum
CREATE TYPE "ReleaseType" AS ENUM ('ALBUM', 'SINGLE', 'MIX');

-- CreateTable
CREATE TABLE "Release" (
    "id" SERIAL NOT NULL,
    "dateReleased" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "titleAlt" TEXT,
    "descriptionRu" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "type" "ReleaseType" NOT NULL,

    CONSTRAINT "Release_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconURL" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "releaseId" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "dateReleased" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "titleAlt" TEXT,
    "descriptionRu" TEXT NOT NULL,
    "descriptionEn" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_releaseId_fkey" FOREIGN KEY ("releaseId") REFERENCES "Release"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
