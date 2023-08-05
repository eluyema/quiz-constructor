import { IsString, IsNotEmpty, IsOptional, IsObject } from 'class-validator';
import { JsonData } from '../../../core/types/quizConfigUnit/JsonData';

export class CreateQuizConfigUnitDto {
  @IsNotEmpty()
  @IsString()
  locale: string;

  @IsOptional()
  @IsString()
  utmSource: string | null;

  @IsObject()
  configData: JsonData;
}
