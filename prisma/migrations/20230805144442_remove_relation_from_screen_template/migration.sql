-- DropForeignKey
ALTER TABLE "ScreenTemplate" DROP CONSTRAINT "ScreenTemplate_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "ScreenTemplate" DROP CONSTRAINT "ScreenTemplate_formConfigId_fkey";

-- AlterTable
ALTER TABLE "ScreenTemplate" ADD COLUMN     "contentConfig" JSONB,
ADD COLUMN     "formConfig" JSONB;
