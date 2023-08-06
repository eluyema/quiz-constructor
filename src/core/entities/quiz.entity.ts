import { ScreenEntity } from './screen.entity';

export class QuizEntity {
  constructor(
    private id: string,
    private displayName: string,
    private slug: string,
    private screens: ScreenEntity[] | null = null,
  ) {}

  getId() {
    return this.id;
  }

  getDisplayName() {
    return this.displayName;
  }

  getSlug() {
    return this.slug;
  }

  getScreens() {
    return this.screens;
  }
}
