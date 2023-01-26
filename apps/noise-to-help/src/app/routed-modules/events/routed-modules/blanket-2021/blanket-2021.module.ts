import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { Blanket2021Component } from './blanket-2021.component';
import { Blanket2021RoutingModule } from './blanket-2021-routing.module';
import { TypographyModule } from '../../../../modules/typography/typography.module';
import { ImgModule } from '../../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { CarouselModule } from '../../../../modules/carousel/carousel.module';
import { GmbtAlertModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [Blanket2021Component],
  imports: [
    CommonModule,
    Blanket2021RoutingModule,
    ViewModule,
    TypographyModule,
    ImgModule,
    TwoColumnsLayoutModule,
    CarouselModule,
    GmbtAlertModule,
  ],
  exports: [Blanket2021Component],
})
export class Blanket2021Module {}
