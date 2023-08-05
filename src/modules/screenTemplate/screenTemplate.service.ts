import { Injectable } from '@nestjs/common';
import { CreateScreenTemplateWithConfigs } from './dtos/CreateScreenTemplateWithConfigsDto';
import { ScreenTemplateRepository } from './screenTemplate.repository';
import { ScreenTemplate } from '../../core/entities/ScreenTemplate';
import { QuizConfigUnit } from '../../core/entities/QuizConfigUnit';

@Injectable()
export class ScreenTemplateService {
  constructor(private readonly screenTemplateRepository: ScreenTemplateRepository) {}

  async createScreenTemplate(newScreenTemplate: ScreenTemplate) {
    return this.screenTemplateRepository.createScreenTemplate(newScreenTemplate);
  }

  async getAllScreenTemplates() {
    return this.screenTemplateRepository.getAllScreenTemplates();
  }
}
