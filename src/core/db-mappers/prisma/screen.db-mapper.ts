import Prisma from '@prisma/client';
import { Screen } from '../../entities/Screen';
import { QuizConfigUnitDbMapper } from './quizConfigUnit.db-mapper';

export class ScreenDbMapper {
  toEntity(
    screenDb: Prisma.Screen & {
      contentData?: Prisma.QuizConfigUnit[] | null;
      formData?: Prisma.QuizConfigUnit[] | null;
    },
  ): Screen {
    const quizConfigUnitMapper = new QuizConfigUnitDbMapper();
    const contentData =
      screenDb.contentData &&
      screenDb.contentData.map((data) => quizConfigUnitMapper.toEntity(data));
    const formData =
      screenDb.formData && screenDb.formData.map((data) => quizConfigUnitMapper.toEntity(data));

    return new Screen(
      screenDb.id,
      screenDb.screenTemplateId,
      screenDb.quizId,
      contentData || null,
      formData || null,
    );
  }
}
