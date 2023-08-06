/*
  Warnings:

  - A unique constraint covering the columns `[keyName]` on the table `ScreenTemplateEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ScreenTemplate_keyName_key" ON "ScreenTemplateEntity"("keyName");
