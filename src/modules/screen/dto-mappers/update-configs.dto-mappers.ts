import { UpdateConfigsDto } from '../dtos/update-configs.dto';
import { QuizConfigUnitEntity } from '../../../core/entities/quiz-config-unit.entity';
import { generateUUID } from '../../../lib/generateUUID';

export class UpdateConfigsDtoMapper {
  getConfigDataEntities(updateConfigsDto: UpdateConfigsDto): null | QuizConfigUnitEntity[] {
    if (!Array.isArray(updateConfigsDto.contentData)) {
      return null;
    }
    return updateConfigsDto.contentData.map(
      (config) =>
        new QuizConfigUnitEntity(
          generateUUID(),
          config.locale,
          config.utmSource,
          config.configData,
        ),
    );
  }

  getFormDataEntities(updateConfigsDto: UpdateConfigsDto): null | QuizConfigUnitEntity[] {
    if (!Array.isArray(updateConfigsDto.formData)) {
      return null;
    }
    return updateConfigsDto.formData.map(
      (config) =>
        new QuizConfigUnitEntity(
          generateUUID(),
          config.locale,
          config.utmSource,
          config.configData,
        ),
    );
  }
}
