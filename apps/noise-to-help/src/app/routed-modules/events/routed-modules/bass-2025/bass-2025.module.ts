import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bass2025Component } from './bass-2025.component';
import { Bass2025RoutingModule } from './bass-2025-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Bass2025Component],
  imports: [
    CommonModule,
    Bass2025RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Bass2025Component],
})
export class Bass2025Module {}
