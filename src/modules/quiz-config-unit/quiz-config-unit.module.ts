import { Module } from '@nestjs/common';
import { QuizConfigUnitService } from './quiz-config-unit.service';
import { QuizConfigUnitController } from './quiz-config-unit.controller';
import { QuizConfigUnitRepository } from './quiz-config-unit.repository';

@Module({
  providers: [QuizConfigUnitService, QuizConfigUnitRepository],
  controllers: [QuizConfigUnitController],
})
export class QuizConfigUnitModule {}
