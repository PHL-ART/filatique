-- CreateEnum
CREATE TYPE "ArticleType" AS ENUM ('ARTICLE', 'INTERVIEW');

-- CreateTable
CREATE TABLE "Index" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,
    "type" "ArticleType" NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,

    CONSTRAINT "Index_pkey" PRIMARY KEY ("id")
);
