/*
  Warnings:

  - You are about to drop the column `name` on the `QuizEntity` table. All the data in the column will be lost.
  - You are about to drop the column `config_data` on the `QuizConfigUnitEntity` table. All the data in the column will be lost.
  - You are about to drop the column `utm_source` on the `QuizConfigUnitEntity` table. All the data in the column will be lost.
  - Added the required column `displayName` to the `QuizEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `QuizEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `configData` to the `QuizConfigUnitEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizEntity" DROP COLUMN "name",
ADD COLUMN     "displayName" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuizConfigUnitEntity" DROP COLUMN "config_data",
DROP COLUMN "utm_source",
ADD COLUMN     "configData" JSONB NOT NULL,
ADD COLUMN     "utmSource" TEXT;

-- CreateTable
CREATE TABLE "ScreenTemplateEntity" (
    "id" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "keyName" TEXT NOT NULL,
    "contentConfigId" TEXT,
    "formConfigId" TEXT,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screen_contentConfigId_formConfigId_key" ON "ScreenTemplateEntity"("contentConfigId", "formConfigId");

-- AddForeignKey
ALTER TABLE "ScreenTemplateEntity" ADD CONSTRAINT "Screen_contentConfigId_fkey" FOREIGN KEY ("contentConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScreenTemplateEntity" ADD CONSTRAINT "Screen_formConfigId_fkey" FOREIGN KEY ("formConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
