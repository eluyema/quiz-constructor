import { Screen } from './Screen';

export class Quiz {
  constructor(
    private id: string,
    private displayName: string,
    private slug: string,
    private screens: Screen[] | null = null,
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
