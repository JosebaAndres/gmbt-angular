import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toys2025Component } from './toys-2025.component';
import { Toys2025RoutingModule } from './toys-2025-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Toys2025Component],
  imports: [
    CommonModule,
    Toys2025RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [Toys2025Component],
})
export class Toys2025Module {}
