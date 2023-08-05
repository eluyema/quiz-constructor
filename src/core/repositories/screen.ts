import { ScreenTemplate } from '../entities/ScreenTemplate';

export abstract class IScreenRepository {
  abstract createConfig(config: ScreenTemplate): Promise<ScreenTemplate>;

  abstract getAllConfigs(): Promise<ScreenTemplate[]>;

  abstract deleteAllConfigs(): Promise<void>;

  abstract deleteConfigById(id: string): Promise<void>;
}
