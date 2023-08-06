import { ScreenEntity } from './screen.entity';
import { JsonData } from '../types/quizConfigUnit/JsonData';

export class ScreenTemplateEntity {
  constructor(
    private id: string,
    private displayName: string,
    private keyName: string,
    private contentConfig: JsonData = null,
    private formConfig: JsonData = null,
    private screens: ScreenEntity[] = null,
  ) {}

  getId() {
    return this.id;
  }

  getDisplayName() {
    return this.displayName;
  }

  getKeyName() {
    return this.keyName;
  }

  getContentConfig() {
    return this.contentConfig;
  }

  getFormConfig() {
    return this.formConfig;
  }

  getScreens() {
    return this.screens;
  }
}
