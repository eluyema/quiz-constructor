import { CreateQuizDto } from '../dtos/CreateQuizDto';
import { Quiz } from '../../../core/entities/Quiz';
import { generateUUID } from '../../../lib/generateUUID';

export class CreateQuizDtoMapper {
  toEntity(dto: CreateQuizDto): Quiz {
    return new Quiz(generateUUID(), dto.displayName, dto.slug);
  }
}
