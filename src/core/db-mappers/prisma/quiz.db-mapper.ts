import { Prisma, Screen as PrismaScreen, Quiz as PrismaQuiz } from '@prisma/client';
import { Quiz } from '../../entities/Quiz';
import { ScreenDbMapper } from './screen.db-mapper';

export class QuizDbMapper {
  toEntity(quizDB: PrismaQuiz & { screens?: PrismaScreen[] }) {
    const screenDbMapper = new ScreenDbMapper();

    const screens =
      quizDB.screens && quizDB.screens.map((screen) => screenDbMapper.toEntity(screen));
    return new Quiz(quizDB.id, quizDB.displayName, quizDB.slug, screens || null);
  }

  toDbCreate(quiz: Quiz): Prisma.QuizCreateInput {
    return {
      id: quiz.getId(),
      displayName: quiz.getDisplayName(),
      slug: quiz.getSlug(),
    }; // TODO: add screens here too
  }
}
