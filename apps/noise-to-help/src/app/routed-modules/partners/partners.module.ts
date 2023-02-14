import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';
import { RouterModule } from '@angular/router';
import { GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';
import { GmbtImgModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [PartnersComponent],
  exports: [PartnersComponent],
  imports: [CommonModule, PartnersRoutingModule, GmbtViewModule, RouterModule, GmbtTypographyModule, GmbtImgModule],
})
export class PartnersModule {}
