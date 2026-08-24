import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PunkRockMetalHistoryBrionesComponent } from './punk-rock-metal-history-briones.component';
import { PunkRockMetalHistoryBrionesRoutingModule } from './punk-rock-metal-history-briones-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import {
  GmbtAlertModule,
  GmbtCarouselModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [PunkRockMetalHistoryBrionesComponent],
  imports: [
    CommonModule,
    PunkRockMetalHistoryBrionesRoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    TwoColumnsLayoutModule,
    GmbtImgModule,
    GmbtAlertModule,
    GmbtCarouselModule,
  ],
  exports: [PunkRockMetalHistoryBrionesComponent],
})
export class PunkRockMetalHistoryBrionesModule {}
