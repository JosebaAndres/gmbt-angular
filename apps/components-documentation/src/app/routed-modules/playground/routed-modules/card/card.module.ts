import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardRoutingModule } from './card-routing.module';
import { GmbtCardModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule, GmbtCardModule],
  exports: [CardComponent],
})
export class CardModule {}
