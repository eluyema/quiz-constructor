import { CreateQuizDto } from '../dtos/create-quiz.dto';
import { QuizEntity } from '../../../core/entities/quiz.entity';
import { generateUUID } from '../../../lib/generateUUID';

export class CreateQuizDtoMapper {
  toEntity(dto: CreateQuizDto): QuizEntity {
    return new QuizEntity(generateUUID(), dto.displayName, dto.slug);
  }
}
