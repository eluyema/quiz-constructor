import { ScreenTemplateEntity } from '../../../core/entities/screen-template.entity';
import {
  GetAllScreenTemplatesDto,
  PresentationScreenTemplates,
} from '../dtos/get-all-screen-templates.dto';

export class GetAllScreenTemplatesDtoMapper {
  toDto(screenTemplate: ScreenTemplateEntity[]) {
    const presentationScreenTemplates = screenTemplate.map(
      (screenTemplate) =>
        new PresentationScreenTemplates(
          screenTemplate.getId(),
          screenTemplate.getDisplayName(),
          screenTemplate.getKeyName(),
          screenTemplate.getContentConfig(),
          screenTemplate.getFormConfig(),
        ),
    );
    return new GetAllScreenTemplatesDto(presentationScreenTemplates);
  }
}
