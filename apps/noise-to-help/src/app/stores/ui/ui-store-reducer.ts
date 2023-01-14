import { createReducer, on } from '@ngrx/store';
import {
  uiStoreActionCloseMenu,
  uiStoreActionOpenMenu,
  uiStoreActionSetDeviceType,
  uiStoreActionSetDocumentWidth,
  uiStoreActionSetMediaQuery,
  uiStoreActionSetNavigating,
  uiStoreActionSetScrollTop,
  uiStoreActionSetSignatures,
} from './ui-store-actions';
import { initialUiStoreState } from './ui-store-state';

export const uiReducer = createReducer(
  initialUiStoreState,
  on(uiStoreActionOpenMenu, (state) => ({ ...state, menuOpened: true })),
  on(uiStoreActionCloseMenu, (state) => ({ ...state, menuOpened: false })),
  on(uiStoreActionSetMediaQuery, (state, { mediaQuery }) => ({ ...state, mediaQuery })),
  on(uiStoreActionSetDeviceType, (state, { deviceType }) => ({ ...state, deviceType })),
  on(uiStoreActionSetScrollTop, (state, { scrollTop }) => ({ ...state, scrollTop })),
  on(uiStoreActionSetNavigating, (state, { navigating }) => ({ ...state, navigating })),
  on(uiStoreActionSetDocumentWidth, (state, { documentWidth }) => ({ ...state, documentWidth })),
  on(uiStoreActionSetSignatures, (state, { signatureModels }) => ({ ...state, signatures: signatureModels })),
);
