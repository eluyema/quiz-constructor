import { ScreenTemplate } from '../../../core/entities/ScreenTemplate';
import { CreateScreenTemplateWithConfigs } from '../dtos/CreateScreenTemplateWithConfigsDto';
import { generateUUID } from '../../../lib/generateUUID';
import { QuizConfigUnit } from '../../../core/entities/QuizConfigUnit';

export class CreateScreenTemplateDtoMapper {
  toEntity(dto: CreateScreenTemplateWithConfigs): ScreenTemplate {
    return new ScreenTemplate(generateUUID(), dto.displayName, dto.keyName);
  }

  getContentConfig(dto: CreateScreenTemplateWithConfigs): QuizConfigUnit | null {
    const { contentConfig } = dto;

    if (!contentConfig) {
      return null;
    }

    return new QuizConfigUnit(
      generateUUID(),
      contentConfig.locale,
      contentConfig.utmSource,
      contentConfig.configData,
    );
  }

  getFormConfig(dto: CreateScreenTemplateWithConfigs): QuizConfigUnit | null {
    const { formConfig } = dto;

    if (!formConfig) {
      return null;
    }

    return new QuizConfigUnit(
      generateUUID(),
      formConfig.locale,
      formConfig.utmSource,
      formConfig.configData,
    );
  }
}
