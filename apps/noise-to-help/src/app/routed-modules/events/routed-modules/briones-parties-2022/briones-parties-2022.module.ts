import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrionesParties2022Component } from './briones-parties-2022.component';
import { BrionesParties2022RoutingModule } from './briones-parties-2022-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [BrionesParties2022Component],
  imports: [
    CommonModule,
    BrionesParties2022RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
  ],
  exports: [BrionesParties2022Component],
})
export class BrionesParties2022Module {}
