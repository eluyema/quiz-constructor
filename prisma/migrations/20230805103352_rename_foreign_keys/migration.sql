/*
  Warnings:

  - You are about to drop the column `screenId` on the `Screen` table. All the data in the column will be lost.
  - Added the required column `screenTemplateId` to the `Screen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Screen" DROP CONSTRAINT "Screen_screenId_fkey";

-- AlterTable
ALTER TABLE "Screen" DROP COLUMN "screenId",
ADD COLUMN     "screenTemplateId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_screenTemplateId_fkey" FOREIGN KEY ("screenTemplateId") REFERENCES "ScreenTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
