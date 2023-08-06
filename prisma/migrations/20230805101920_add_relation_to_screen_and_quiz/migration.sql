/*
  Warnings:

  - You are about to drop the `QuizUnit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ScreenTemplateEntity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuizUnit" DROP CONSTRAINT "QuizUnit_screenId_fkey";

-- DropForeignKey
ALTER TABLE "ScreenTemplateEntity" DROP CONSTRAINT "Screen_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "ScreenTemplateEntity" DROP CONSTRAINT "Screen_formConfigId_fkey";

-- DropForeignKey
ALTER TABLE "_quizUnitsWithContentData" DROP CONSTRAINT "_quizUnitsWithContentData_B_fkey";

-- DropForeignKey
ALTER TABLE "_quizUnitsWithFormData" DROP CONSTRAINT "_quizUnitsWithFormData_B_fkey";

-- DropTable
DROP TABLE "QuizUnit";

-- DropTable
DROP TABLE "ScreenTemplateEntity";

-- CreateTable
CREATE TABLE "ScreenEntity" (
    "id" TEXT NOT NULL,
    "screenId" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Screen_Template" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "keyName" TEXT NOT NULL,
    "contentConfigId" TEXT,
    "formConfigId" TEXT,

    CONSTRAINT "Screen_Template_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScreenEntity" ADD CONSTRAINT "Screen_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "QuizEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenEntity" ADD CONSTRAINT "Screen_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen_Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Screen_Template" ADD CONSTRAINT "Screen_Template_contentConfigId_fkey" FOREIGN KEY ("contentConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Screen_Template" ADD CONSTRAINT "Screen_Template_formConfigId_fkey" FOREIGN KEY ("formConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizUnitsWithContentData" ADD CONSTRAINT "_quizUnitsWithContentData_B_fkey" FOREIGN KEY ("B") REFERENCES "ScreenEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizUnitsWithFormData" ADD CONSTRAINT "_quizUnitsWithFormData_B_fkey" FOREIGN KEY ("B") REFERENCES "ScreenEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
