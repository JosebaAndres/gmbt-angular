import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meandros2021Component } from './meandros-2021.component';
import { Meandros2021RoutingModule } from './meandros-2021-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Meandros2021Component],
  imports: [
    CommonModule,
    Meandros2021RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Meandros2021Component],
})
export class Meandros2021Module {}
