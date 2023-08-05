import { QuizConfigUnit } from '../entities/QuizConfigUnit';

export abstract class IQuizConfigUnitRepository {
  abstract createConfig(config: QuizConfigUnit): Promise<QuizConfigUnit>;

  abstract getAllConfigs(): Promise<QuizConfigUnit[]>;

  abstract deleteAllConfigs(): Promise<void>;

  abstract deleteConfigById(id: string): Promise<void>;
}
