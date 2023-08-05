/*
  Warnings:

  - You are about to drop the `Screen_Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Screen_Template" DROP CONSTRAINT "Screen_Template_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "Screen_Template" DROP CONSTRAINT "Screen_Template_formConfigId_fkey";

-- DropTable
DROP TABLE "Screen_Template";

-- CreateTable
CREATE TABLE "ScreenTemplate" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "keyName" TEXT NOT NULL,
    "contentConfigId" TEXT,
    "formConfigId" TEXT,

    CONSTRAINT "ScreenTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "ScreenTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenTemplate" ADD CONSTRAINT "ScreenTemplate_contentConfigId_fkey" FOREIGN KEY ("contentConfigId") REFERENCES "QuizConfigUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenTemplate" ADD CONSTRAINT "ScreenTemplate_formConfigId_fkey" FOREIGN KEY ("formConfigId") REFERENCES "QuizConfigUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
