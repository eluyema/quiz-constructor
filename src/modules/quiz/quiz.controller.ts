import { Controller, Post, Body, HttpCode, Get, Delete, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dtos/create-quiz.dto';
import { CreateQuizDtoMapper } from './dto-mappers/create-quiz.dto-mapper';

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @HttpCode(201)
  async createQuiz(@Body() createQuizDto: CreateQuizDto) {
    const dtoMapper = new CreateQuizDtoMapper();
    await this.quizService.createQuiz(dtoMapper.toEntity(createQuizDto));
  }

  @Get()
  getAllQuizzes() {
    return this.quizService.getAllQuizzes();
  }

  @Delete(':id')
  deleteQuizById(@Param('id') id: string) {
    return this.quizService.deleteQuizById(id);
  }

  @Delete()
  deleteAllQuizzes() {
    return this.quizService.deleteAllQuizzes();
  }
}
