import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../modules/view/view.module';
import { Aventum2022Component } from './aventum-2022.component';
import { Aventum2022RoutingModule } from './aventum-2022-routing.module';
import { TypographyModule } from '../../../modules/typography/typography.module';
import { ImgModule } from '../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../modules/two-columns-layout/two-columns-layout.module';

@NgModule({
  declarations: [Aventum2022Component],
  imports: [CommonModule, Aventum2022RoutingModule, ViewModule, TypographyModule, TwoColumnsLayoutModule, ImgModule],
  exports: [Aventum2022Component],
})
export class Aventum2022Module {}
