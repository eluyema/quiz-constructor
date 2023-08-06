-- DropForeignKey
ALTER TABLE "ScreenTemplateEntity" DROP CONSTRAINT "ScreenTemplate_contentConfigId_fkey";

-- DropForeignKey
ALTER TABLE "ScreenTemplateEntity" DROP CONSTRAINT "ScreenTemplate_formConfigId_fkey";

-- AlterTable
ALTER TABLE "ScreenTemplateEntity" ADD COLUMN     "contentConfig" JSONB,
ADD COLUMN     "formConfig" JSONB;
