import {
  Prisma,
  Screen as PrismaScreen,
  QuizConfigUnit as PrismaQuizConfigUnit,
} from '@prisma/client';
import { ScreenEntity } from '../../entities/screen.entity';
import { QuizConfigUnitDbMapper } from './quiz-config-unit.db-mapper';
import { QuizConfigUnitEntity } from '../../entities/quiz-config-unit.entity';

export class ScreenDbMapper {
  toEntity(
    screenDb: PrismaScreen & {
      contentData?: PrismaQuizConfigUnit[] | null;
      formData?: PrismaQuizConfigUnit[] | null;
    },
  ): ScreenEntity {
    const quizConfigUnitMapper = new QuizConfigUnitDbMapper();
    const contentData =
      screenDb.contentData &&
      screenDb.contentData.map((data) => quizConfigUnitMapper.toEntity(data));
    const formData =
      screenDb.formData && screenDb.formData.map((data) => quizConfigUnitMapper.toEntity(data));

    return new ScreenEntity(
      screenDb.id,
      screenDb.screenTemplateId,
      screenDb.quizId,
      contentData || null,
      formData || null,
      screenDb.nextScreenCondition || null,
    );
  }

  toDbCreate(screen: ScreenEntity): Prisma.ScreenCreateInput {
    const contentData =
      Array.isArray(screen.getContentData()) &&
      screen.getContentData().map((configUnit) => ({
        id: configUnit.getId(),
        locale: configUnit.getLocale(),
        utmSource: configUnit.getUtmSource(),
        configData: configUnit.getConfigData(),
      }));

    const formData =
      Array.isArray(screen.getFormData()) &&
      screen.getFormData().map((configUnit) => ({
        id: configUnit.getId(),
        locale: configUnit.getLocale(),
        utmSource: configUnit.getUtmSource(),
        configData: configUnit.getConfigData(),
      }));

    return {
      id: screen.getId(),
      quiz: {
        connect: {
          id: screen.getQuizId(),
        },
      },
      screenTemplate: {
        connect: {
          id: screen.getScreenTemplateId(),
        },
      },
      contentData: contentData && {
        create: contentData,
      },
      formData: formData && {
        create: formData,
      },
      nextScreenCondition: screen.getNextScreenCondition(),
    };
  }

  toUpdateDbConfigs(
    contentData: QuizConfigUnitEntity[] | null,
    formData: QuizConfigUnitEntity[] | null,
  ): Prisma.ScreenUpdateInput {
    return {
      contentData: contentData
        ? {
            deleteMany: {},
            create: contentData.map((data) => ({
              id: data.getId(),
              locale: data.getLocale(),
              utmSource: data.getUtmSource(),
              configData: data.getConfigData(),
            })),
          }
        : {},
      formData: formData
        ? {
            deleteMany: {},
            create: formData.map((data) => ({
              id: data.getId(),
              locale: data.getLocale(),
              utmSource: data.getUtmSource(),
              configData: data.getConfigData(),
            })),
          }
        : {},
    };
  }
}
