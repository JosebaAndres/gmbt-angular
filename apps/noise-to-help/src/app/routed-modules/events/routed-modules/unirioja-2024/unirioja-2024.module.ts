import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unirioja2024Component } from './unirioja-2024.component';
import { Unirioja2024RoutingModule } from './unirioja-2024-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Unirioja2024Component],
  imports: [
    CommonModule,
    Unirioja2024RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [Unirioja2024Component],
})
export class Unirioja2024Module {}
