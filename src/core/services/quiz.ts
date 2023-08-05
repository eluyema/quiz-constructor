import { Quiz } from '../entities/Quiz';

export abstract class IQuizService {
  abstract createQuiz(quizCreateData: Quiz): Promise<Quiz>;

  abstract getAllQuizzes(): Promise<Quiz[]>;

  abstract deleteQuizById(id: string): Promise<void>;

  abstract deleteAllQuizzes(): Promise<void>;
}
