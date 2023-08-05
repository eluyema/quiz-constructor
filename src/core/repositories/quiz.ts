import { Quiz } from '../entities/Quiz';

export abstract class IQuizRepository {
  abstract createQuiz(quiz: Quiz): Promise<Quiz>;

  abstract getAllQuizzes(): Promise<Quiz[]>;

  abstract deleteQuizById(id: string): Promise<void>;

  abstract deleteAllQuizzes(): Promise<void>;
}
