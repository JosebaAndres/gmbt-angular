import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ManSizeModel } from '../../../app/models/man-size-model';
import { WomanSizeModel } from '../../../app/models/woman-size-model';
import {
  merchandisingStoreSelectManSizes,
  merchandisingStoreSelectShortSizes,
  merchandisingStoreSelectWomanSizes,
} from './merchandising-store-selectors';
import { MerchandisingStoreState } from './merchandising-store-state';
import { ShortSizeModel } from '../../models/short-size-model';

@Injectable()
export class MerchandisingStoreFacade {
  constructor(private merchandisingStore$: Store<MerchandisingStoreState>) {}

  selectWomanSizes(): Observable<Array<WomanSizeModel>> {
    return this.merchandisingStore$.select(merchandisingStoreSelectWomanSizes);
  }

  selectManSizes(): Observable<Array<ManSizeModel>> {
    return this.merchandisingStore$.select(merchandisingStoreSelectManSizes);
  }

  selectShortSizes(): Observable<Array<ShortSizeModel>> {
    return this.merchandisingStore$.select(merchandisingStoreSelectShortSizes);
  }
}
