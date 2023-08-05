/*
  Warnings:

  - You are about to drop the column `contentConfigId` on the `QuizUnit` table. All the data in the column will be lost.
  - You are about to drop the column `formConfigId` on the `QuizUnit` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuizUnit" DROP CONSTRAINT "QuizUnit_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "QuizUnit" DROP CONSTRAINT "QuizUnit_formConfigId_fkey";

-- AlterTable
ALTER TABLE "QuizUnit" DROP COLUMN "contentConfigId",
DROP COLUMN "formConfigId";

-- CreateTable
CREATE TABLE "_quizUnitsWithContentData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_quizUnitsWithFormData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_quizUnitsWithContentData_AB_unique" ON "_quizUnitsWithContentData"("A", "B");

-- CreateIndex
CREATE INDEX "_quizUnitsWithContentData_B_index" ON "_quizUnitsWithContentData"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_quizUnitsWithFormData_AB_unique" ON "_quizUnitsWithFormData"("A", "B");

-- CreateIndex
CREATE INDEX "_quizUnitsWithFormData_B_index" ON "_quizUnitsWithFormData"("B");

-- AddForeignKey
ALTER TABLE "_quizUnitsWithContentData" ADD CONSTRAINT "_quizUnitsWithContentData_A_fkey" FOREIGN KEY ("A") REFERENCES "QuizConfigUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizUnitsWithContentData" ADD CONSTRAINT "_quizUnitsWithContentData_B_fkey" FOREIGN KEY ("B") REFERENCES "QuizUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizUnitsWithFormData" ADD CONSTRAINT "_quizUnitsWithFormData_A_fkey" FOREIGN KEY ("A") REFERENCES "QuizConfigUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_quizUnitsWithFormData" ADD CONSTRAINT "_quizUnitsWithFormData_B_fkey" FOREIGN KEY ("B") REFERENCES "QuizUnit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
