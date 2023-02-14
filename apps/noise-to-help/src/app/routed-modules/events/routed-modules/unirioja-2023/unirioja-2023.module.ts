import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unirioja2023Component } from './unirioja-2023.component';
import { Unirioja2023RoutingModule } from './unirioja-2023-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Unirioja2023Component],
  imports: [
    CommonModule,
    Unirioja2023RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [Unirioja2023Component],
})
export class Unirioja2023Module {}
