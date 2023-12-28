import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guitar2023Component } from './guitar-2023.component';
import { Guitar2023RoutingModule } from './guitar-2023-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Guitar2023Component],
  imports: [
    CommonModule,
    Guitar2023RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Guitar2023Component],
})
export class Guitar2023Module {}
