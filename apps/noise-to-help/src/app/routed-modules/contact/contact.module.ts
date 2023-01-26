import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, ViewModule, GmbtTypographyModule],
  exports: [ContactComponent],
})
export class ContactModule {}
