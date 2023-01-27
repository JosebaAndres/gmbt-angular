import { createAction } from '@ngrx/store';

export const playgroundActionSetSelectedTheme = createAction(
  '[Playground] set selected theme',
  (selectedTheme: string) => ({
    selectedTheme,
  }),
);
