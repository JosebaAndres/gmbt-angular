import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrionesBeerDay2023Component } from './briones-beer-day-2023.component';
import { BrionesBeerDay2023RoutingModule } from './briones-beer-day-2023-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [BrionesBeerDay2023Component],
  imports: [
    CommonModule,
    BrionesBeerDay2023RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [BrionesBeerDay2023Component],
})
export class BrionesBeerDay2023Module {}
