import { QuizConfigUnitEntity } from './quiz-config-unit.entity';
import { JsonData } from '../types/quizConfigUnit/JsonData';

export class ScreenEntity {
  constructor(
    private id: string,
    private screenTemplateId: string,
    private quizId: string,
    private contentData: QuizConfigUnitEntity[] | null,
    private formData: QuizConfigUnitEntity[] | null,
    private nextScreenCondition: JsonData,
  ) {}

  getId() {
    return this.id;
  }

  getScreenTemplateId() {
    return this.screenTemplateId;
  }

  getQuizId() {
    return this.quizId;
  }

  getContentData() {
    return this.contentData;
  }

  getFormData() {
    return this.formData;
  }

  getNextScreenCondition() {
    return this.nextScreenCondition;
  }

  isConfigDataValid() {
    return ScreenEntity.isConfigValid(this.contentData);
  }

  isFormDataValid() {
    return ScreenEntity.isConfigValid(this.formData);
  }

  static isConfigValid(config: QuizConfigUnitEntity[] | null) {
    if (config === null || config.length < 2) {
      return true;
    }

    for (let i = 0; i < config.length; i++) {
      for (let j = i + 1; j < config.length; j++) {
        if (
          config[i].getLocale() === config[j].getLocale() &&
          config[i].getUtmSource() === config[j].getUtmSource()
        ) {
          return false;
        }
      }
    }
    return true;
  }
}
