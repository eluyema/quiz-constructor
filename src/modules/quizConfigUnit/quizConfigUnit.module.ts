import { Module } from '@nestjs/common';
import { QuizConfigUnitService } from './quizConfigUnit.service';
import { QuizConfigUnitController } from './quizConfigUnit.controller';
import { QuizConfigUnitRepository } from './quizConfigUnit.repository';

@Module({
  providers: [QuizConfigUnitService, QuizConfigUnitRepository],
  controllers: [QuizConfigUnitController],
})
export class QuizConfigUnitModule {}
