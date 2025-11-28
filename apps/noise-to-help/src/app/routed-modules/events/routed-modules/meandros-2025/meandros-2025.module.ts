import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meandros2025Component } from './meandros-2025.component';
import { Meandros2025RoutingModule } from './meandros-2025-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Meandros2025Component],
  imports: [
    CommonModule,
    Meandros2025RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Meandros2025Component],
})
export class Meandros2025Module {}
