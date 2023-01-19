import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { BrionesParties2022Component } from './briones-parties-2022.component';
import { BrionesParties2022RoutingModule } from './briones-parties-2022-routing.module';
import { TypographyModule } from '../../../../modules/typography/typography.module';
import { ImgModule } from '../../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { AlertModule } from '../../../../modules/alert/alert.module';

@NgModule({
  declarations: [BrionesParties2022Component],
  imports: [
    CommonModule,
    BrionesParties2022RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    AlertModule,
  ],
  exports: [BrionesParties2022Component],
})
export class BrionesParties2022Module {}
