import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmbtCardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GmbtCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [GmbtCardComponent],
})
export class GmbtCardModule {}
