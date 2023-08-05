import { Module } from '@nestjs/common';
import { ScreenTemplateController } from './screenTemplate.controller';
import { ScreenTemplateService } from './screenTemplate.service';
import { ScreenTemplateRepository } from './screenTemplate.repository';

@Module({
  controllers: [ScreenTemplateController],
  providers: [ScreenTemplateService, ScreenTemplateRepository],
})
export class ScreenTemplateModule {}
