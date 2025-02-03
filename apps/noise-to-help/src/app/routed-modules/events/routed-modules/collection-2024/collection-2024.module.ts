import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Collection2024Component } from './collection-2024.component';
import { Collection2024RoutingModule } from './collection-2024-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Collection2024Component],
  imports: [
    CommonModule,
    Collection2024RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Collection2024Component],
})
export class Collection2024Module {}
