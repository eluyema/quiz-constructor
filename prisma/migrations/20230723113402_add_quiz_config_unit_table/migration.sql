-- CreateTable
CREATE TABLE "QuizConfigUnitEntity" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "utm_source" TEXT NOT NULL,
    "config_data" JSONB NOT NULL,

    CONSTRAINT "QuizConfigUnit_pkey" PRIMARY KEY ("id")
);
