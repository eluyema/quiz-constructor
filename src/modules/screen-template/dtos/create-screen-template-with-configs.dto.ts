import { IsString, IsNotEmpty, IsOptional, Matches, IsObject } from 'class-validator';
import { baseKeyRegex } from '../../../core/constants/regex/base-key-regex';
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
  @IsObject()
  contentConfig?: JsonData;

  @IsOptional()
  @IsObject()
  formConfig?: JsonData;
}
