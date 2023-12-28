import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolidaryConcert2023Component } from './solidary-concert-2023.component';
import { SolidaryConcert2023RoutingModule } from './solidary-concert-2023-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [SolidaryConcert2023Component],
  imports: [
    CommonModule,
    SolidaryConcert2023RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [SolidaryConcert2023Component],
})
export class SolidaryConcert2023Module {}
