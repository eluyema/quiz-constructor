import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './db/prisma/prisma.module';
import { QuizConfigUnitModule } from './modules/quiz-config-unit/quiz-config-unit.module';
import { ScreenTemplateModule } from './modules/screen-template/screen-template.module';
import { ScreenModule } from './modules/screen/screen.module';

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
    ScreenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
