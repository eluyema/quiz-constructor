import {
  IsString,
  IsNotEmpty,
  IsOptional,
  Matches,
  IsArray,
  ValidateNested,
  IsObject,
  IsDefined,
  IsNotEmptyObject,
} from 'class-validator';
import { Type } from 'class-transformer';
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

export class CreateScreenDto {
  @IsNotEmpty()
  @IsString()
  screenTemplateId: string;

  @IsNotEmpty()
  @IsString()
  quizId: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizConfigUnitDto)
  contentData?: CreateQuizConfigUnitDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizConfigUnitDto)
  formData?: CreateQuizConfigUnitDto[];

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  nextScreenCondition: JsonData;
}
