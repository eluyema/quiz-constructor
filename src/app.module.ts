import { Module } from '@nestjs/common';
import { QuizzesModule } from './modules/quizzes/quizzes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QuizzesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
