import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { CollaborateComponent } from './collaborate.component';
import { CollaborateRoutingModule } from './collaborate-routing.module';
import { GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [CollaborateComponent],
  imports: [CommonModule, CollaborateRoutingModule, ViewModule, GmbtTypographyModule],
  exports: [CollaborateComponent],
})
export class CollaborateModule {}
