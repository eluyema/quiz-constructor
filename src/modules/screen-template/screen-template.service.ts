import { Injectable } from '@nestjs/common';
import { ScreenTemplateRepository } from './screen-template.repository';
import { ScreenTemplateEntity } from '../../core/entities/screen-template.entity';

@Injectable()
export class ScreenTemplateService {
  constructor(private readonly screenTemplateRepository: ScreenTemplateRepository) {}

  async createScreenTemplate(newScreenTemplate: ScreenTemplateEntity) {
    return this.screenTemplateRepository.createScreenTemplate(newScreenTemplate);
  }

  async getAllScreenTemplates() {
    return this.screenTemplateRepository.getAllScreenTemplates();
  }

  async deleteAllScreenTemplates() {
    return this.screenTemplateRepository.deleteAllScreenTemplates();
  }
}
