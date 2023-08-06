import { Module } from '@nestjs/common';
import { ScreenTemplateController } from './screen-template.controller';
import { ScreenTemplateService } from './screen-template.service';
import { ScreenTemplateRepository } from './screen-template.repository';

@Module({
  controllers: [ScreenTemplateController],
  providers: [ScreenTemplateService, ScreenTemplateRepository],
})
export class ScreenTemplateModule {}
