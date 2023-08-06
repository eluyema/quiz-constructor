import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { validSlugRegex } from '../../../core/constants/regex/valid-slug-regex';

export class CreateQuizDto {
  @IsString()
  @MinLength(1)
  @MaxLength(150)
  readonly displayName: string;

  @IsString()
  @MinLength(5)
  @MaxLength(120)
  @Matches(validSlugRegex, {
    message: 'Invalid slug format. Slugs can only contain lowercase letters, numbers, and hyphens.',
  })
  readonly slug: string;
}
