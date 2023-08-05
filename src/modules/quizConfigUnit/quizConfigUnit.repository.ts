import { Injectable } from '@nestjs/common';
import { IQuizConfigUnitRepository } from '../../core/repositories/quizConfigUnit';
import { QuizConfigUnit } from '../../core/entities/QuizConfigUnit';
import { PrismaService } from '../../db/prisma/prisma.service';
import { QuizConfigUnitDbMapper } from '../../core/db-mappers/prisma/quizConfigUnit.db-mapper';

@Injectable()
export class QuizConfigUnitRepository implements IQuizConfigUnitRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createConfig(config: QuizConfigUnit): Promise<QuizConfigUnit> {
    const quizConfigUnitDbMapper = new QuizConfigUnitDbMapper();
    const createdConfigUnit = await this.prisma.quizConfigUnit.create({
      data: quizConfigUnitDbMapper.toDbCreate(config),
      include: {
        screensWithContentConfig: true,
        screensWithFormConfig: true,
        quizUnitsWithContentData: true,
        quizUnitsWithFormData: true,
      },
    });
    return quizConfigUnitDbMapper.toEntity(createdConfigUnit);
  }

  async getAllConfigs(): Promise<QuizConfigUnit[]> {
    const quizConfigUnitDbMapper = new QuizConfigUnitDbMapper();
    const configUnits = await this.prisma.quizConfigUnit.findMany({
      include: {
        screensWithContentConfig: true,
        screensWithFormConfig: true,
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
