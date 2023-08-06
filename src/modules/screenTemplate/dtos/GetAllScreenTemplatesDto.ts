import { JsonData } from '../../../core/types/quizConfigUnit/JsonData';

export class PresentationScreenTemplates {
  constructor(
    public displayName: string,
    public keyName: string,
    public contentConfig: JsonData,
    public formConfig: JsonData,
  ) {}
}

export class GetAllScreenTemplatesDto {
  constructor(public screenTemplates: PresentationScreenTemplates[]) {}
}
