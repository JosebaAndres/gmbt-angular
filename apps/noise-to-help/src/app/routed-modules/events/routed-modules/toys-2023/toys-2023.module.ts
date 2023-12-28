import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toys2023Component } from './toys-2023.component';
import { Toys2023RoutingModule } from './toys-2023-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Toys2023Component],
  imports: [
    CommonModule,
    Toys2023RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Toys2023Component],
})
export class Toys2023Module {}
