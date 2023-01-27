import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThemeModel } from '../../models/theme-model';
import { playgroundActionSetSelectedTheme } from './playground-store-actions';
import { playgroundStoreSelectedTheme, playgroundStoreThemes } from './playground-store-selectors';
import { PlaygroundStoreState } from './playground-store-state';

@Injectable()
export class PlaygroundStoreFacade {
  themes$ = this.playgroundStore$.select(playgroundStoreThemes);
  selectedTheme$ = this.playgroundStore$.select(playgroundStoreSelectedTheme);

  constructor(private playgroundStore$: Store<PlaygroundStoreState>) {}

  setSelectedTheme(selectedTheme: string) {
    this.playgroundStore$.dispatch(playgroundActionSetSelectedTheme(selectedTheme));
  }
}
