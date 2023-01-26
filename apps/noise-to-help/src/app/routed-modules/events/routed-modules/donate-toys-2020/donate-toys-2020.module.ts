import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { DonateToys2020Component } from './donate-toys-2020.component';
import { DonateToys2020RoutingModule } from './donate-toys-2020-routing.module';
import { TypographyModule } from '../../../../modules/typography/typography.module';
import { ImgModule } from '../../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { CarouselModule } from '../../../../modules/carousel/carousel.module';
import { GmbtAlertModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [DonateToys2020Component],
  imports: [
    CommonModule,
    DonateToys2020RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    CarouselModule,
    GmbtAlertModule,
  ],
  exports: [DonateToys2020Component],
})
export class DonateToys2020Module {}
