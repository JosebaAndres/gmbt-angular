import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MerchandisingStoreFacade } from './merchandising-store-facade';
import { merchandisingStoreKey } from './merchandising-store-key';
import { merchandisingReducer } from './merchandising-store-reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(merchandisingStoreKey, merchandisingReducer)],
  declarations: [],
  providers: [MerchandisingStoreFacade],
})
export class MerchandisingStoreModule {}
