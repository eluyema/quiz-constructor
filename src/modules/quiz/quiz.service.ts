import { Injectable } from '@nestjs/common';
import { QuizRepository } from './quiz.repository';
import { IQuizService } from '../../core/services/quiz';
import { Quiz } from '../../core/entities/Quiz';

@Injectable()
export class QuizService implements IQuizService {
  constructor(private readonly quizRepository: QuizRepository) {}

  createQuiz(quiz: Quiz) {
    return this.quizRepository.createQuiz(quiz);
  }

  getAllQuizzes() {
    return this.quizRepository.getAllQuizzes();
  }

  deleteQuizById(id: string) {
    return this.quizRepository.deleteQuizById(id);
  }

  deleteAllQuizzes() {
    return this.quizRepository.deleteAllQuizzes();
  }
}
