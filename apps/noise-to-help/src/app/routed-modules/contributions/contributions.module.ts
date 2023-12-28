import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsComponent } from './contributions.component';
import { ContributionsRoutingModule } from './contributions-routing.module';
import { RouterModule } from '@angular/router';
import { GmbtCarouselModule, GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [
    CommonModule,
    ContributionsRoutingModule,
    GmbtViewModule,
    RouterModule,
    GmbtTypographyModule,
    GmbtCarouselModule,
    GmbtImgModule,
  ],
  exports: [ContributionsComponent],
})
export class ContributionsModule {}
