/*
  Warnings:

  - You are about to drop the column `screenId` on the `ScreenEntity` table. All the data in the column will be lost.
  - Added the required column `screenTemplateId` to the `ScreenEntity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ScreenEntity" DROP CONSTRAINT "Screen_screenId_fkey";

-- AlterTable
ALTER TABLE "ScreenEntity" DROP COLUMN "screenId",
ADD COLUMN     "screenTemplateId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ScreenEntity" ADD CONSTRAINT "Screen_screenTemplateId_fkey" FOREIGN KEY ("screenTemplateId") REFERENCES "ScreenTemplateEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
