import { HttpException, HttpStatus, Injectable, Query } from '@nestjs/common';
import { ScreenRepository } from './screen.repository';
import { ScreenEntity } from '../../core/entities/screen.entity';
import { QuizConfigUnitEntity } from '../../core/entities/quiz-config-unit.entity';

@Injectable()
export class ScreenService {
  constructor(private readonly screenRepository: ScreenRepository) {}

  createScreen(screen: ScreenEntity) {
    if (!screen.isConfigDataValid()) {
      throw new HttpException(
        `Config data is not valid. Pair of 'locale' and 'utmSource' should be uniq`,
        HttpStatus.NOT_FOUND,
      );
    }

    if (!screen.isFormDataValid()) {
      throw new HttpException(
        `Form data is not valid. Pair of 'locale' and 'utmSource' should be uniq`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.screenRepository.createScreen(screen);
  }

  findScreens(params: Record<string, unknown>) {
    return this.screenRepository.findScreens(params);
  }

  async findScreenById(screenId: string) {
    const screen = await this.screenRepository.findScreenById(screenId);
    if (!screen) {
      throw new HttpException(`Screen with id '${screenId}' not found`, HttpStatus.NOT_FOUND);
    }
    return screen;
  }

  async deleteScreenById(screenId: string) {
    const screenWasRemoved = await this.screenRepository.deleteScreenById(screenId);
    if (!screenWasRemoved) {
      throw new HttpException(`Screen with id '${screenId}' not found`, HttpStatus.NOT_FOUND);
    }
  }

  async updateConfigs(
    screenId: string,
    contentData: QuizConfigUnitEntity[] | null,
    formData: QuizConfigUnitEntity[] | null,
  ) {
    const updatedScreen = await this.screenRepository.updateConfigs(
      screenId,
      contentData,
      formData,
    );

    if (!updatedScreen) {
      return new HttpException(`Screen with id '${screenId}' was not found`, HttpStatus.NOT_FOUND);
    }

    return updatedScreen;
  }
}
