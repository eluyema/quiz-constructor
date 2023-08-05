import { Injectable } from '@nestjs/common';
import { IQuizConfigUnitService } from '../../core/services/quizConfigUnit';
import { QuizConfigUnitRepository } from './quizConfigUnit.repository';
import { QuizConfigUnit } from '../../core/entities/QuizConfigUnit';
import { CreateQuizConfigUnitDto } from './dtos/CreateQuizConfigUnitDto';

@Injectable()
export class QuizConfigUnitService implements IQuizConfigUnitService {
  constructor(private readonly quizConfigUnitRepository: QuizConfigUnitRepository) {}

  createConfig(config: QuizConfigUnit): Promise<QuizConfigUnit> {
    return this.quizConfigUnitRepository.createConfig(config);
  }

  getAllConfigs(): Promise<QuizConfigUnit[]> {
    return this.quizConfigUnitRepository.getAllConfigs();
  }

  async deleteAllConfigs(): Promise<void> {
    await this.quizConfigUnitRepository.deleteAllConfigs();
  }

  async deleteConfigById(id: string): Promise<void> {
    await this.quizConfigUnitRepository.deleteConfigById(id);
  }
}
