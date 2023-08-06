import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { IQuizRepository } from '../../core/repositories/quiz';
import { QuizDbMapper } from '../../core/db-mappers/prisma/quiz.db-mapper';
import { QuizEntity } from '../../core/entities/quiz.entity';

@Injectable()
export class QuizRepository implements IQuizRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createQuiz(createQuizData: QuizEntity) {
    const mapper = new QuizDbMapper();
    const quiz = await this.prisma.quiz.create({ data: mapper.toDbCreate(createQuizData) });
    return mapper.toEntity(quiz);
  }

  async getAllQuizzes() {
    const mapper = new QuizDbMapper();
    const quizzes = await this.prisma.quiz.findMany();
    return quizzes.map((quiz) => mapper.toEntity(quiz));
  }

  async deleteQuizById(id: string) {
    await this.prisma.quiz.delete({ where: { id } });
  }

  async deleteAllQuizzes() {
    await this.prisma.quiz.deleteMany();
  }
}
