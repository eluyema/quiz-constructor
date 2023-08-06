import { QuizEntity } from '../entities/quiz.entity';

export abstract class IQuizRepository {
  abstract createQuiz(quiz: QuizEntity): Promise<QuizEntity>;

  abstract getAllQuizzes(): Promise<QuizEntity[]>;

  abstract deleteQuizById(id: string): Promise<void>;

  abstract deleteAllQuizzes(): Promise<void>;
}
