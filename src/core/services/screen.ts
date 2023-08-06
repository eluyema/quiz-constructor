import { QuizConfigUnitEntity } from '../entities/quiz-config-unit.entity';

export abstract class IScreenService {
  abstract createConfig(config: QuizConfigUnitEntity): Promise<QuizConfigUnitEntity>;

  abstract getAllConfigs(): Promise<QuizConfigUnitEntity[]>;

  abstract deleteAllConfigs(): Promise<void>;

  abstract deleteConfigById(id: string): Promise<void>;
}
