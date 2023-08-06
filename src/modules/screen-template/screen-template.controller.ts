import { Controller, HttpCode, Post, Get, Body, Delete } from '@nestjs/common';
import { CreateScreenTemplateWithConfigs } from './dtos/create-screen-template-with-configs.dto';
import { ScreenTemplateService } from './screen-template.service';
import { CreateScreenTemplateDtoMapper } from './dto-mappers/create-screen-template.dto-mapper';
import { GetAllScreenTemplatesDtoMapper } from './dto-mappers/get-all-screen-templates.dto-mapper';

@Controller('screen-templates')
export class ScreenTemplateController {
  constructor(private readonly screenTemplateService: ScreenTemplateService) {}

  @Post()
  @HttpCode(201)
  createScreenWithConfigs(@Body() createScreenWithConfigs: CreateScreenTemplateWithConfigs) {
    const dtoMapper = new CreateScreenTemplateDtoMapper();
    return this.screenTemplateService.createScreenTemplate(
      dtoMapper.toEntity(createScreenWithConfigs),
    );
  }

  @Get()
  async getAllScreenTemplates() {
    const mapper = new GetAllScreenTemplatesDtoMapper();
    const screenTemplates = await this.screenTemplateService.getAllScreenTemplates();
    return mapper.toDto(screenTemplates);
  }

  @Delete()
  async deleteAllScreenTemplates() {
    await this.screenTemplateService.deleteAllScreenTemplates();
  }
}
