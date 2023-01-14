import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../modules/view/view.module';
import { Unirioja2022Component } from './unirioja-2022.component';
import { Unirioja2022RoutingModule } from './unirioja-2022-routing.module';
import { TypographyModule } from '../../../modules/typography/typography.module';
import { ImgModule } from '../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../modules/two-columns-layout/two-columns-layout.module';
import { AlertModule } from '../../../modules/alert/alert.module';

@NgModule({
  declarations: [Unirioja2022Component],
  imports: [
    CommonModule,
    Unirioja2022RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    AlertModule,
  ],
  exports: [Unirioja2022Component],
})
export class Unirioja2022Module {}
