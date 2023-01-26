import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { DonateToys2020Component } from './donate-toys-2020.component';
import { DonateToys2020RoutingModule } from './donate-toys-2020-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtCarouselModule, GmbtImgModule, GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [DonateToys2020Component],
  imports: [
    CommonModule,
    DonateToys2020RoutingModule,
    ViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtCarouselModule,
    GmbtAlertModule,
  ],
  exports: [DonateToys2020Component],
})
export class DonateToys2020Module {}
