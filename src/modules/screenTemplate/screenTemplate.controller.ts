import { Controller, HttpCode, Post, Get, Body } from '@nestjs/common';
import { CreateScreenTemplateWithConfigs } from './dtos/CreateScreenTemplateWithConfigsDto';
import { ScreenTemplateService } from './screenTemplate.service';
import { CreateScreenTemplateDtoMapper } from './dto-mappers/createScreenTemplate.dto-mapper';

@Controller('screenTemplates')
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
  @HttpCode(201)
  getAllScreenTemplates() {
    return this.screenTemplateService.getAllScreenTemplates();
  }
}
