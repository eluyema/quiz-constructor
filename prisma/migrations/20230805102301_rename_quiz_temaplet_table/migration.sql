/*
  Warnings:

  - You are about to drop the `Screen_Template` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScreenEntity" DROP CONSTRAINT "Screen_screenId_fkey";

-- DropForeignKey
ALTER TABLE "Screen_Template" DROP CONSTRAINT "Screen_Template_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "Screen_Template" DROP CONSTRAINT "Screen_Template_formConfigId_fkey";

-- DropTable
DROP TABLE "Screen_Template";

-- CreateTable
CREATE TABLE "ScreenTemplateEntity" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "keyName" TEXT NOT NULL,
    "contentConfigId" TEXT,
    "formConfigId" TEXT,

    CONSTRAINT "ScreenTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScreenEntity" ADD CONSTRAINT "Screen_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "ScreenTemplateEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenTemplateEntity" ADD CONSTRAINT "ScreenTemplate_contentConfigId_fkey" FOREIGN KEY ("contentConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenTemplateEntity" ADD CONSTRAINT "ScreenTemplate_formConfigId_fkey" FOREIGN KEY ("formConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
