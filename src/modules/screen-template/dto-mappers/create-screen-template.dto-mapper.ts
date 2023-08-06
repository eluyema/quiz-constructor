import { ScreenTemplateEntity } from '../../../core/entities/screen-template.entity';
import { CreateScreenTemplateWithConfigs } from '../dtos/create-screen-template-with-configs.dto';
import { generateUUID } from '../../../lib/generateUUID';

export class CreateScreenTemplateDtoMapper {
  toEntity(dto: CreateScreenTemplateWithConfigs): ScreenTemplateEntity {
    return new ScreenTemplateEntity(
      generateUUID(),
      dto.displayName,
      dto.keyName,
      dto.contentConfig || null,
      dto.formConfig || null,
    );
  }
}
