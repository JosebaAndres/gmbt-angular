import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../../../modules/view/view.module';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { CardModule } from '../../../../modules/card/card.module';
import { TypographyModule } from '../../../../modules/typography/typography.module';
import { ImgModule } from '../../../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../../../modules/two-columns-layout/two-columns-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { GmbtAlertModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ViewModule,
    CardModule,
    TypographyModule,
    ImgModule,
    TwoColumnsLayoutModule,
    MatButtonModule,
    GmbtAlertModule,
  ],
  exports: [EventsComponent],
})
export class EventsModule {}
