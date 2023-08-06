import { Injectable } from '@nestjs/common';
import { IQuizConfigUnitService } from '../../core/services/quiz-config-unit';
import { QuizConfigUnitRepository } from './quiz-config-unit.repository';
import { QuizConfigUnitEntity } from '../../core/entities/quiz-config-unit.entity';

@Injectable()
export class QuizConfigUnitService implements IQuizConfigUnitService {
  constructor(private readonly quizConfigUnitRepository: QuizConfigUnitRepository) {}

  createConfig(config: QuizConfigUnitEntity): Promise<QuizConfigUnitEntity> {
    return this.quizConfigUnitRepository.createConfig(config);
  }

  getAllConfigs(): Promise<QuizConfigUnitEntity[]> {
    return this.quizConfigUnitRepository.getAllConfigs();
  }

  async deleteAllConfigs(): Promise<void> {
    await this.quizConfigUnitRepository.deleteAllConfigs();
  }

  async deleteConfigById(id: string): Promise<void> {
    await this.quizConfigUnitRepository.deleteConfigById(id);
  }
}
