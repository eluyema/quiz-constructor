import { Injectable } from '@nestjs/common';
import { IQuizConfigUnitRepository } from '../../core/repositories/quiz-config-unit';
import { QuizConfigUnitEntity } from '../../core/entities/quiz-config-unit.entity';
import { PrismaService } from '../../db/prisma/prisma.service';
import { QuizConfigUnitDbMapper } from '../../core/db-mappers/prisma/quiz-config-unit.db-mapper';

@Injectable()
export class QuizConfigUnitRepository implements IQuizConfigUnitRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createConfig(config: QuizConfigUnitEntity): Promise<QuizConfigUnitEntity> {
    const quizConfigUnitDbMapper = new QuizConfigUnitDbMapper();
    const createdConfigUnit = await this.prisma.quizConfigUnit.create({
      data: quizConfigUnitDbMapper.toDbCreate(config),
      include: {
        quizUnitsWithContentData: true,
        quizUnitsWithFormData: true,
      },
    });
    return quizConfigUnitDbMapper.toEntity(createdConfigUnit);
  }

  async getAllConfigs(): Promise<QuizConfigUnitEntity[]> {
    const quizConfigUnitDbMapper = new QuizConfigUnitDbMapper();
    const configUnits = await this.prisma.quizConfigUnit.findMany({
      include: {
        quizUnitsWithContentData: true,
        quizUnitsWithFormData: true,
      },
    });

    return configUnits.map((configUnit) => quizConfigUnitDbMapper.toEntity(configUnit));
  }

  async deleteAllConfigs(): Promise<void> {
    await this.prisma.quizConfigUnit.deleteMany();
  }

  async deleteConfigById(id: string): Promise<void> {
    await this.prisma.quizConfigUnit.delete({ where: { id } });
  }
}
