import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography.component';
import { TypographyRoutingModule } from './typography-routing.module';
import { GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule, TypographyRoutingModule, GmbtTypographyModule],
  exports: [TypographyComponent],
})
export class TypographyModule {}
