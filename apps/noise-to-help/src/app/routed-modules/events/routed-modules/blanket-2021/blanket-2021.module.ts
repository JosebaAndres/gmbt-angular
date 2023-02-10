import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blanket2021Component } from './blanket-2021.component';
import { Blanket2021RoutingModule } from './blanket-2021-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Blanket2021Component],
  imports: [
    CommonModule,
    Blanket2021RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    GmbtImgModule,
    TwoColumnsLayoutModule,
    GmbtCarouselModule,
    GmbtAlertModule,
  ],
  exports: [Blanket2021Component],
})
export class Blanket2021Module {}
