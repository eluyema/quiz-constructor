-- CreateTable
CREATE TABLE "QuizUnit" (
    "id" TEXT NOT NULL,
    "screenId" TEXT NOT NULL,
    "contentConfigId" TEXT,
    "formConfigId" TEXT,

    CONSTRAINT "QuizUnit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizUnit" ADD CONSTRAINT "QuizUnit_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "ScreenTemplateEntity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizUnit" ADD CONSTRAINT "QuizUnit_contentConfigId_fkey" FOREIGN KEY ("contentConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizUnit" ADD CONSTRAINT "QuizUnit_formConfigId_fkey" FOREIGN KEY ("formConfigId") REFERENCES "QuizConfigUnitEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
