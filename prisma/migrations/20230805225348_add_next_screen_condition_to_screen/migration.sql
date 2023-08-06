/*
  Warnings:

  - Added the required column `nextScreenCondition` to the `ScreenEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScreenEntity" ADD COLUMN     "nextScreenCondition" JSONB NOT NULL;
