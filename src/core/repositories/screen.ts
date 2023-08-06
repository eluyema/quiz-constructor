import { ScreenTemplateEntity } from '../entities/screen-template.entity';

export abstract class IScreenRepository {
  abstract createConfig(config: ScreenTemplateEntity): Promise<ScreenTemplateEntity>;

  abstract getAllConfigs(): Promise<ScreenTemplateEntity[]>;

  abstract deleteAllConfigs(): Promise<void>;

  abstract deleteConfigById(id: string): Promise<void>;
}
