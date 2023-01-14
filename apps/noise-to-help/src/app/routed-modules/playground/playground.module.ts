import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { CardModule } from '../../modules/card/card.module';
import { TypographyModule } from '../../modules/typography/typography.module';
import { AlertModule } from '../../modules/alert/alert.module';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, PlaygroundRoutingModule, ViewModule, CardModule, TypographyModule, AlertModule],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {}
