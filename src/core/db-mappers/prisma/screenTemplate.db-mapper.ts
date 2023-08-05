import {
  Prisma,
  ScreenTemplate as PrismaScreenTemplate,
  Screen as PrismaScreen,
} from '@prisma/client';

import { ScreenTemplate } from '../../entities/ScreenTemplate';
import { ScreenDbMapper } from './screen.db-mapper';
import { QuizConfigUnit } from '../../entities/QuizConfigUnit';

export class ScreenTemplateDbMapper {
  toEntity(screenTemplate: PrismaScreenTemplate & { screens?: PrismaScreen[] }) {
    const screenDbMapper = new ScreenDbMapper();
    const screens =
      screenTemplate.screens &&
      screenTemplate.screens.map((screen) => screenDbMapper.toEntity(screen));

    return new ScreenTemplate(
      screenTemplate.id,
      screenTemplate.displayName,
      screenTemplate.keyName,
      screenTemplate.contentConfigId,
      screenTemplate.formConfigId,
      screens || null,
    );
  }

  toDbCreate(
    screenTemplate: ScreenTemplate,
    contentConfig?: QuizConfigUnit,
    formConfig?: QuizConfigUnit,
  ): Prisma.ScreenTemplateCreateInput {
    return {
      displayName: screenTemplate.getDisplayName(),
      keyName: screenTemplate.getKeyName(),
      contentConfig: contentConfig && {
        create: {
          id: contentConfig.getId(),
          locale: contentConfig.getLocale(),
          utmSource: contentConfig.getUtmSource(),
          configData: contentConfig.getConfigData(),
        },
      },
      formConfig: formConfig && {
        create: {
          id: formConfig.getId(),
          locale: formConfig.getLocale(),
          utmSource: formConfig.getUtmSource(),
          configData: formConfig.getConfigData(),
        },
      },
    };
  }
}
