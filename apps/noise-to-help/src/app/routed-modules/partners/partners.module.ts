import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';
import { RouterModule } from '@angular/router';
import { TypographyModule } from '../../modules/typography/typography.module';

@NgModule({
  declarations: [PartnersComponent],
  imports: [CommonModule, PartnersRoutingModule, ViewModule, RouterModule, TypographyModule],
  exports: [PartnersComponent],
})
export class PartnersModule {}
