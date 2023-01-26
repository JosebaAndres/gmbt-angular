import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { Pixel2022Component } from './pixel-2022.component';
import { Pixel2022RoutingModule } from './pixel-2022-routing.module';
import { TypographyModule } from '../../../../modules/typography/typography.module';
import { ImgModule } from '../../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { CarouselModule } from '../../../../modules/carousel/carousel.module';
import { GmbtAlertModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Pixel2022Component],
  imports: [
    CommonModule,
    Pixel2022RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    GmbtAlertModule,
    CarouselModule,
  ],
  exports: [Pixel2022Component],
})
export class Pixel2022Module {}
