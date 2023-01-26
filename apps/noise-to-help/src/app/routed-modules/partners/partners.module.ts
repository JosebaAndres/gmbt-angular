import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';
import { RouterModule } from '@angular/router';
import { GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, PartnersRoutingModule, ViewModule, RouterModule, GmbtTypographyModule],
  exports: [PartnersComponent],
})
export class PartnersModule {}
