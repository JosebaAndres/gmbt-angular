import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, QuestionsRoutingModule, ViewModule, MatExpansionModule, GmbtTypographyModule],
  exports: [QuestionsComponent],
})
export class QuestionsUsModule {}
