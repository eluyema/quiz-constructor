import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { ScreenTemplateDbMapper } from '../../core/db-mappers/prisma/screen-template.db-mapper';
import { ScreenTemplateEntity } from '../../core/entities/screen-template.entity';

@Injectable()
export class ScreenTemplateRepository {
  constructor(private readonly prisma: PrismaService) {}

  createScreenTemplate(newScreenData: ScreenTemplateEntity) {
    const screenTemplateDbMapper = new ScreenTemplateDbMapper();
    return this.prisma.screenTemplate.create({
      data: screenTemplateDbMapper.toDbCreate(newScreenData),
    });
  }

  async getAllScreenTemplates() {
    const screenTemplateDbMapper = new ScreenTemplateDbMapper();
    const screenTemplates = await this.prisma.screenTemplate.findMany();
    return screenTemplates.map((screenTemplate) => screenTemplateDbMapper.toEntity(screenTemplate));
  }

  async deleteAllScreenTemplates() {
    return this.prisma.screenTemplate.deleteMany();
  }
}
