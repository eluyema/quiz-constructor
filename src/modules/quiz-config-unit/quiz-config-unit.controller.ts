import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateQuizConfigUnitDto } from './dtos/CreateQuizConfigUnitDto';
import { QuizConfigUnitService } from './quiz-config-unit.service';
import { CreateQuizConfigUnitDtoMapper } from './dto-mappers/CreateQuizConfigUnit.dto-mapper';

@Controller('quiz-config-units')
export class QuizConfigUnitController {
  constructor(private readonly quizConfigUnitService: QuizConfigUnitService) {}

  @Post()
  createConfig(@Body() createConfigDto: CreateQuizConfigUnitDto) {
    const createConfigMapper = new CreateQuizConfigUnitDtoMapper();
    return this.quizConfigUnitService.createConfig(createConfigMapper.toEntity(createConfigDto));
  }

  @Get()
  getAllConfigs() {
    return this.quizConfigUnitService.getAllConfigs();
  }

  @Delete(':id')
  deleteConfigById(@Param('id') id: string) {
    return this.quizConfigUnitService.deleteConfigById(id);
  }

  @Delete()
  deleteAllConfigs() {
    return this.quizConfigUnitService.deleteAllConfigs();
  }
}
