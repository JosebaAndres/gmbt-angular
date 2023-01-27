import { createReducer, on } from '@ngrx/store';
import { playgroundActionSetSelectedTheme } from './playground-store-actions';
import { initialPlaygroundStoreState } from './playground-store-state';

export const playgroundReducer = createReducer(
  initialPlaygroundStoreState,
  on(playgroundActionSetSelectedTheme, (state, { selectedTheme }) => ({ ...state, selectedTheme })),
);
