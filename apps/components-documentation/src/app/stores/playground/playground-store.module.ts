import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PlaygroundStoreEffects } from './playground-store-effects';
import { PlaygroundStoreFacade } from './playground-store-facade';
import { playgroundStoreKey } from './playground-store-key';
import { playgroundReducer } from './playground-store-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(playgroundStoreKey, playgroundReducer),
    EffectsModule.forFeature([PlaygroundStoreEffects]),
  ],
  declarations: [],
  providers: [PlaygroundStoreFacade],
})
export class PlaygroundStoreModule {}
