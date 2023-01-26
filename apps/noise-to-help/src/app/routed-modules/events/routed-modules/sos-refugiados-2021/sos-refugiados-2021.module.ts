import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { SosRefugiados2021Component } from './sos-refugiados-2021.component';
import { SosRefugiados2021RoutingModule } from './sos-refugiados-2021-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { GmbtAlertModule, GmbtCarouselModule, GmbtImgModule, GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [SosRefugiados2021Component],
  imports: [
    CommonModule,
    SosRefugiados2021RoutingModule,
    ViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [SosRefugiados2021Component],
})
export class SosRefugiados2021Module {}
