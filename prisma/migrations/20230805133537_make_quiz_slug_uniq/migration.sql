/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `QuizEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quiz_slug_key" ON "QuizEntity"("slug");
