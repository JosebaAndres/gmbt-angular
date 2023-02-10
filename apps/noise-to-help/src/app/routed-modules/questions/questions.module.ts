import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, QuestionsRoutingModule, GmbtViewModule, MatExpansionModule, GmbtTypographyModule],
  exports: [QuestionsComponent],
})
export class QuestionsUsModule {}
