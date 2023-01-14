import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../modules/view/view.module';
import { SosRefugiados2021Component } from './sos-refugiados-2021.component';
import { SosRefugiados2021RoutingModule } from './sos-refugiados-2021-routing.module';
import { TypographyModule } from '../../../modules/typography/typography.module';
import { ImgModule } from '../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../modules/two-columns-layout/two-columns-layout.module';
import { AlertModule } from '../../../modules/alert/alert.module';
import { CarouselModule } from '../../../modules/carousel/carousel.module';

@NgModule({
  declarations: [SosRefugiados2021Component],
  imports: [
    CommonModule,
    SosRefugiados2021RoutingModule,
    ViewModule,
    TypographyModule,
    TwoColumnsLayoutModule,
    ImgModule,
    AlertModule,
    CarouselModule,
  ],
  exports: [SosRefugiados2021Component],
})
export class SosRefugiados2021Module {}
