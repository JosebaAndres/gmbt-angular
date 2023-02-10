import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, GmbtViewModule, GmbtTypographyModule],
  exports: [ContactComponent],
})
export class ContactModule {}
