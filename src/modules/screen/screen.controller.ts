import { Controller, HttpCode, Post, Patch, Get, Body, Delete, Query, Param } from '@nestjs/common';
import { ScreenService } from './screen.service';
import { CreateScreenDto } from './dtos/create-screen.dto';
import { CreateScreenDtoMapper } from './dto-mappers/create-screen.dto-mappers';
import { UpdateConfigsDto } from './dtos/update-configs.dto';
import { UpdateConfigsDtoMapper } from './dto-mappers/update-configs.dto-mappers';

@Controller('screen')
export class ScreenController {
  constructor(private readonly screenService: ScreenService) {}

  @Post()
  @HttpCode(201)
  createScreen(@Body() createScreenDto: CreateScreenDto) {
    const mapper = new CreateScreenDtoMapper();
    return this.screenService.createScreen(mapper.toEntity(createScreenDto));
  }

  @Get()
  findScreens(
    @Query('quizId') quizId?: string,
    @Query('screenTemplateId') screenTemplateId?: string,
  ) {
    return this.screenService.findScreens({ quizId, screenTemplateId });
  }

  @Get(':id')
  async findScreenById(@Param('id') screenId: string) {
    return await this.screenService.findScreenById(screenId);
  }

  @Delete(':id')
  async deleteScreenById(@Param('id') screenId: string) {
    await await this.screenService.deleteScreenById(screenId);
    return { message: 'ok' };
  }

  @Patch('configs/:id')
  async updateConfigs(@Param('id') screenId: string, @Body() updateConfigsDto: UpdateConfigsDto) {
    const dtoMapper = new UpdateConfigsDtoMapper();
    const contentData = dtoMapper.getConfigDataEntities(updateConfigsDto);
    const formData = dtoMapper.getFormDataEntities(updateConfigsDto);
    return this.screenService.updateConfigs(screenId, contentData, formData);
  }
}
