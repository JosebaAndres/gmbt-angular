import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrionesBeerDay2024Component } from './briones-beer-day-2024.component';
import { BrionesBeerDay2024RoutingModule } from './briones-beer-day-2024-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [BrionesBeerDay2024Component],
  imports: [
    CommonModule,
    BrionesBeerDay2024RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [BrionesBeerDay2024Component],
})
export class BrionesBeerDay2024Module {}
