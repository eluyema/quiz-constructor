import { IsString, IsNotEmpty, IsOptional, ValidateNested, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateQuizConfigUnitDto } from '../../quizConfigUnit/dtos/CreateQuizConfigUnitDto';
import { baseKeyRegex } from '../../../core/constants/regex/baseKeyRegex';
import { JsonData } from '../../../core/types/quizConfigUnit/JsonData';

export class CreateScreenTemplateWithConfigs {
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(baseKeyRegex, {
    message: 'keyName must be a valid JavaScript variable name without spaces.',
  })
  keyName: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateQuizConfigUnitDto)
  contentConfig: JsonData | null;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateQuizConfigUnitDto)
  formConfig: JsonData | null;
}
