import { CreateQuizConfigUnitDto } from '../dtos/CreateQuizConfigUnitDto';
import { QuizConfigUnitEntity } from '../../../core/entities/quiz-config-unit.entity';
import { generateUUID } from '../../../lib/generateUUID';

export class CreateQuizConfigUnitDtoMapper {
  toEntity(dto: CreateQuizConfigUnitDto): QuizConfigUnitEntity {
    return new QuizConfigUnitEntity(generateUUID(), dto.locale, dto.utmSource, dto.configData);
  }
}
