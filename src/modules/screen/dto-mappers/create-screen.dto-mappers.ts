import { ScreenEntity } from '../../../core/entities/screen.entity';
import { CreateScreenDto } from '../dtos/create-screen.dto';
import { generateUUID } from '../../../lib/generateUUID';
import { QuizConfigUnitEntity } from '../../../core/entities/quiz-config-unit.entity';

export class CreateScreenDtoMapper {
  toEntity(dto: CreateScreenDto): ScreenEntity {
    const contentData = this.getContentDataEntities(dto);
    const formData = this.getFormDataEntities(dto);

    return new ScreenEntity(
      generateUUID(),
      dto.screenTemplateId,
      dto.quizId,
      contentData || null,
      formData || null,
      dto.nextScreenCondition,
    );
  }

  getContentDataEntities(dto: CreateScreenDto): QuizConfigUnitEntity[] | null {
    if (!Array.isArray(dto.contentData)) {
      return null;
    }

    return dto.contentData.map(
      (config) =>
        new QuizConfigUnitEntity(
          generateUUID(),
          config.locale,
          config.utmSource,
          config.configData,
        ),
    );
  }

  getFormDataEntities(dto: CreateScreenDto): QuizConfigUnitEntity[] | null {
    if (!Array.isArray(dto.formData)) {
      return null;
    }

    return dto.formData.map(
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
