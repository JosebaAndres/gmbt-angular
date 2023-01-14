import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../modules/view/view.module';
import { Meandros2021Component } from './meandros-2021.component';
import { Meandros2021RoutingModule } from './meandros-2021-routing.module';
import { TypographyModule } from '../../../modules/typography/typography.module';
import { ImgModule } from '../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../modules/two-columns-layout/two-columns-layout.module';
import { AlertModule } from '../../../modules/alert/alert.module';
import { CarouselModule } from '../../../modules/carousel/carousel.module';

@NgModule({
  declarations: [Meandros2021Component],
  imports: [
    CommonModule,
    Meandros2021RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    AlertModule,
    CarouselModule,
  ],
  exports: [Meandros2021Component],
})
export class Meandros2021Module {}
