import { QuizConfigUnit } from './QuizConfigUnit';

export class Screen {
  constructor(
    private id: string,
    private screenTemplateId: string,
    private quizId: string,
    private contentData: QuizConfigUnit[] | null,
    private formData: QuizConfigUnit[] | null,
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
}
