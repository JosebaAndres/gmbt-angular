import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';
import { RouterModule } from '@angular/router';
import { GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, PartnersRoutingModule, GmbtViewModule, RouterModule, GmbtTypographyModule],
  exports: [PartnersComponent],
})
export class PartnersModule {}
