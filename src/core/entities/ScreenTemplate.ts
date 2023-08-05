import { Screen } from './Screen';
import { JsonData } from '../types/quizConfigUnit/JsonData';

export class ScreenTemplate {
  constructor(
    private id: string,
    private displayName: string,
    private keyName: string,
    private contentConfig: JsonData | null = null,
    private formConfig: JsonData | null = null,
    private screens: Screen[] | null = null,
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
