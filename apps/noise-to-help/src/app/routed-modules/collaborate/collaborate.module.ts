import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborateComponent } from './collaborate.component';
import { CollaborateRoutingModule } from './collaborate-routing.module';
import { GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [CollaborateComponent],
  imports: [CommonModule, CollaborateRoutingModule, GmbtViewModule, GmbtTypographyModule],
  exports: [CollaborateComponent],
})
export class CollaborateModule {}
