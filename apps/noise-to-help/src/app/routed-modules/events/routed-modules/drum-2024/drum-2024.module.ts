import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drum2024Component } from './drum-2024.component';
import { Drum2024RoutingModule } from './drum-2024-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [Drum2024Component],
  imports: [
    CommonModule,
    Drum2024RoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [Drum2024Component],
})
export class Drum2024Module {}
