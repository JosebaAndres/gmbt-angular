import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { CollaborateComponent } from './collaborate.component';
import { CollaborateRoutingModule } from './collaborate-routing.module';
import { TypographyModule } from '../../modules/typography/typography.module';

@NgModule({
  declarations: [CollaborateComponent],
  imports: [CommonModule, CollaborateRoutingModule, ViewModule, TypographyModule],
  exports: [CollaborateComponent],
})
export class CollaborateModule {}
