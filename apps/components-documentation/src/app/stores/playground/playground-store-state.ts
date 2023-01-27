import { ThemeModel } from '../../models/theme-model';

export interface PlaygroundStoreState {
  selectedTheme: string;
  themes: Array<ThemeModel>;
}

const THEMES: Array<ThemeModel> = [
  {
    code: 'dark-garnet',
    description: 'Dark garnet',
  },
  {
    code: 'dark-yellow',
    description: 'Dark yellow',
  },
];

export const initialPlaygroundStoreState: PlaygroundStoreState = {
  selectedTheme: THEMES[0].code,
  themes: THEMES,
};
