import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { ContributionsComponent } from './contributions.component';
import { ContributionsRoutingModule } from './contributions-routing.module';
import { RouterModule } from '@angular/router';
import { TypographyModule } from '../../modules/typography/typography.module';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [CommonModule, ContributionsRoutingModule, ViewModule, RouterModule, TypographyModule],
  exports: [ContributionsComponent],
})
export class ContributionsModule {}
