import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsObject,
  IsDefined,
  IsNotEmptyObject,
} from 'class-validator';
import { JsonData } from '../../../core/types/quizConfigUnit/JsonData';

export class CreateQuizConfigUnitDto {
  @IsNotEmpty()
  @IsString()
  locale: string;

  @IsOptional()
  @IsString()
  utmSource: string | null;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  configData: JsonData;
}
