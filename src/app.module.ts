import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './db/prisma/prisma.module';
import { QuizConfigUnitModule } from './modules/quizConfigUnit/quizConfigUnit.module';
import { ScreenTemplateModule } from './modules/screenTemplate/screenTemplate.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    QuizModule,
    QuizConfigUnitModule,
    ScreenTemplateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
