import { JsonData } from '../types/quizConfigUnit/JsonData';

export class QuizConfigUnit {
  constructor(
    private id: string,
    private locale: string,
    private utmSource: string | null,
    private configData: JsonData,
  ) {}

  getId() {
    return this.id;
  }

  getLocale() {
    return this.locale;
  }

  getUtmSource() {
    return this.utmSource;
  }

  getConfigData() {
    return this.configData;
  }
}
