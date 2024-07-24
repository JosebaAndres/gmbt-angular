import { createReducer } from '@ngrx/store';
import { initialMerchandisingStoreState } from './merchandising-store-state';

export const merchandisingReducer = createReducer(initialMerchandisingStoreState);
