import { QuizEntity } from '../entities/quiz.entity';

export abstract class IQuizService {
  abstract createQuiz(quizCreateData: QuizEntity): Promise<QuizEntity>;

  abstract getAllQuizzes(): Promise<QuizEntity[]>;

  abstract deleteQuizById(id: string): Promise<void>;

  abstract deleteAllQuizzes(): Promise<void>;
}
