import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { Aventum2022Component } from './aventum-2022.component';
import { Aventum2022RoutingModule } from './aventum-2022-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Aventum2022Component],
  imports: [
    CommonModule,
    Aventum2022RoutingModule,
    ViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [Aventum2022Component],
})
export class Aventum2022Module {}
