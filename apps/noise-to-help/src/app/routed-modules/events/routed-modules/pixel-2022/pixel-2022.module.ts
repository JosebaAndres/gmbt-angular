import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pixel2022Component } from './pixel-2022.component';
import { Pixel2022RoutingModule } from './pixel-2022-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Pixel2022Component],
  imports: [
    CommonModule,
    Pixel2022RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Pixel2022Component],
})
export class Pixel2022Module {}
