import { CreateQuizConfigUnitDto } from '../dtos/CreateQuizConfigUnitDto';
import { QuizConfigUnit } from '../../../core/entities/QuizConfigUnit';
import { generateUUID } from '../../../lib/generateUUID';

export class CreateQuizConfigUnitDtoMapper {
  toEntity(dto: CreateQuizConfigUnitDto): QuizConfigUnit {
    return new QuizConfigUnit(generateUUID(), dto.locale, dto.utmSource, dto.configData);
  }
}
