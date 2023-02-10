import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { MatButtonModule } from '@angular/material/button';
import {
  GmbtAlertModule,
  GmbtCardModule,
  GmbtImgModule,
  GmbtTypographyModule,
  GmbtViewModule,
} from '@gmbt-angular/components';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    GmbtViewModule,
    GmbtCardModule,
    GmbtTypographyModule,
    GmbtImgModule,
    TwoColumnsLayoutModule,
    MatButtonModule,
    GmbtAlertModule,
  ],
  exports: [EventsComponent],
})
export class EventsModule {}
