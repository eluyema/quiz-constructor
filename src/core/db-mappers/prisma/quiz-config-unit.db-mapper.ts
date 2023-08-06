import { Prisma, QuizConfigUnit as PrismaQuizConfigUnit } from '@prisma/client';
import { QuizConfigUnitEntity } from '../../entities/quiz-config-unit.entity';

export class QuizConfigUnitDbMapper {
  toEntity(quizConfigUnitDb: PrismaQuizConfigUnit): QuizConfigUnitEntity {
    return new QuizConfigUnitEntity(
      quizConfigUnitDb.id,
      quizConfigUnitDb.locale,
      quizConfigUnitDb.utmSource,
      quizConfigUnitDb.configData,
    );
  }

  toDbCreate(quizConfigUnit: QuizConfigUnitEntity): Prisma.QuizConfigUnitCreateInput {
    return {
      id: quizConfigUnit.getId(),
      locale: quizConfigUnit.getLocale(),
      utmSource: quizConfigUnit.getUtmSource(),
      configData: quizConfigUnit.getConfigData(),
    };
  }
}
