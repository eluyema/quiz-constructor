import { Prisma, QuizConfigUnit as PrismaQuizConfigUnit } from '@prisma/client';
import { QuizConfigUnit } from '../../entities/QuizConfigUnit';

export class QuizConfigUnitDbMapper {
  toEntity(quizConfigUnitDb: PrismaQuizConfigUnit): QuizConfigUnit {
    return new QuizConfigUnit(
      quizConfigUnitDb.id,
      quizConfigUnitDb.locale,
      quizConfigUnitDb.utmSource,
      quizConfigUnitDb.configData,
    );
  }

  toDbCreate(quizConfigUnit: QuizConfigUnit): Prisma.QuizConfigUnitCreateInput {
    return {
      id: quizConfigUnit.getId(),
      locale: quizConfigUnit.getLocale(),
      utmSource: quizConfigUnit.getUtmSource(),
      configData: quizConfigUnit.getConfigData(),
    };
  }
}
