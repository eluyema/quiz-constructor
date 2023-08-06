import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { JsonData } from '../../../core/types/quizConfigUnit/JsonData';
import { Type } from 'class-transformer';

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

export class UpdateConfigsDto {
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
}
