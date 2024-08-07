import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandisingComponent } from './merchandising.component';
import { MerchandisingRoutingModule } from './merchandising-routing.module';
import { MerchandisingStoreModule } from '../../../app/stores/merchandising/merchandising-store.module';
import { MatTableModule } from '@angular/material/table';
import { GmbtImgModule, GmbtTypographyModule, GmbtViewModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [MerchandisingComponent],
  imports: [
    CommonModule,
    MerchandisingRoutingModule,
    GmbtViewModule,
    GmbtTypographyModule,
    GmbtImgModule,
    MerchandisingStoreModule,
    MatTableModule,
  ],
  exports: [MerchandisingComponent],
})
export class MerchandisingUsModule {}
