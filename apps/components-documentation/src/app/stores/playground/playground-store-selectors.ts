import { createFeatureSelector, createSelector } from '@ngrx/store';
import { playgroundStoreKey } from './playground-store-key';
import { PlaygroundStoreState } from './playground-store-state';

const getPlaygroundStoreState = createFeatureSelector<PlaygroundStoreState>(playgroundStoreKey);

export const playgroundStoreThemes = createSelector(getPlaygroundStoreState, (state) => state.themes);

export const playgroundStoreSelectedTheme = createSelector(getPlaygroundStoreState, (state) => state.selectedTheme);
