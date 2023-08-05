import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { ScreenTemplateDbMapper } from '../../core/db-mappers/prisma/screenTemplate.db-mapper';
import { ScreenTemplate } from '../../core/entities/ScreenTemplate';

@Injectable()
export class ScreenTemplateRepository {
  constructor(private readonly prisma: PrismaService) {}

  createScreenTemplate(newScreenData: ScreenTemplate) {
    const screenTemplateDbMapper = new ScreenTemplateDbMapper();
    return this.prisma.screenTemplate.create({
      data: screenTemplateDbMapper.toDbCreate(newScreenData),
      include: { contentConfig: true, formConfig: true },
    });
  }

  async getAllScreenTemplates() {
    const screenTemplateDbMapper = new ScreenTemplateDbMapper();
    const screenTemplates = await this.prisma.screenTemplate.findMany({
      include: { contentConfig: true, formConfig: true },
    });
    return screenTemplates.map((screenTemplate) => screenTemplateDbMapper.toEntity(screenTemplate));
  }
}
