import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrionesBeerDay2025Component } from './briones-beer-day-2025.component';
import { BrionesBeerDay2025RoutingModule } from './briones-beer-day-2025-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [BrionesBeerDay2025Component],
  imports: [
    CommonModule,
    BrionesBeerDay2025RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [BrionesBeerDay2025Component],
})
export class BrionesBeerDay2025Module {}
