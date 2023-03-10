import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unirioja2022Component } from './unirioja-2022.component';
import { Unirioja2022RoutingModule } from './unirioja-2022-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Unirioja2022Component],
  imports: [
    CommonModule,
    Unirioja2022RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [Unirioja2022Component],
})
export class Unirioja2022Module {}
