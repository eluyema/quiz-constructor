import { ScreenTemplate } from '../../../core/entities/ScreenTemplate';
import { GetAllConfigsDto, PresentationConfigUnit } from '../dtos/GetAllConfigsDto';

export class GetAllConfigDtoMapper {
  toDto(screenTemplate: ScreenTemplate[]) {
    const presentationScreenTemplates = screenTemplate.map(
      (screenTemplate) =>
        new PresentationConfigUnit(
          screenTemplate.getDisplayName(),
          screenTemplate.getKeyName(),
          screenTemplate.getContentConfig(),
          screenTemplate.getFormConfig(),
        ),
    );
    return new GetAllConfigsDto(presentationScreenTemplates);
  }
}
