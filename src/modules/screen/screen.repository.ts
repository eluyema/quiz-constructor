import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { ScreenEntity } from '../../core/entities/screen.entity';
import { ScreenDbMapper } from '../../core/db-mappers/prisma/screen.db-mapper';
import { Prisma } from '@prisma/client';
import { QuizConfigUnitEntity } from '../../core/entities/quiz-config-unit.entity';
import { UpdateConfigsDtoMapper } from './dto-mappers/update-configs.dto-mappers';

@Injectable()
export class ScreenRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createScreen(screen: ScreenEntity) {
    const dbMapper = new ScreenDbMapper();

    const createdScreen = await this.prisma.screen.create({
      data: dbMapper.toDbCreate(screen),
      include: {
        quiz: true,
        screenTemplate: true,
        contentData: true,
        formData: true,
      },
    });

    return dbMapper.toEntity(createdScreen);
  }

  async findScreens(params: Record<string, unknown>) {
    const dbMapper = new ScreenDbMapper();
    const screens = await this.prisma.screen.findMany({
      where: params,
      include: {
        quiz: true,
        screenTemplate: true,
        contentData: true,
        formData: true,
      },
    });

    return screens.map((screen) => dbMapper.toEntity(screen));
  }

  async findScreenById(screenId: string) {
    const dbMapper = new ScreenDbMapper();

    const screen = await this.prisma.screen.findFirst({
      where: {
        id: screenId,
      },
      include: {
        quiz: true,
        screenTemplate: true,
        contentData: true,
        formData: true,
      },
    });

    if (!screen) {
      return null;
    }

    return dbMapper.toEntity(screen);
  }

  async deleteScreenById(screenId: string): Promise<boolean> {
    try {
      await this.prisma.screen.delete({
        where: {
          id: screenId,
        },
      });
      return true;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        return false;
      }
      throw error;
    }
  }

  async updateConfigs(
    screenId: string,
    contentData: QuizConfigUnitEntity[] | null,
    formData: QuizConfigUnitEntity[] | null,
  ) {
    const dbMapper = new ScreenDbMapper();
    const screen = await this.prisma.screen.update({
      where: {
        id: screenId,
      },
      data: dbMapper.toUpdateDbConfigs(contentData, formData),
      include: {
        contentData: true,
        formData: true,
      },
    });

    if (!screen) {
      return null;
    }
    return dbMapper.toEntity(screen);
  }
}
