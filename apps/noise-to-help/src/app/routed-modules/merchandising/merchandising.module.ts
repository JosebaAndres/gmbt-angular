import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { MerchandisingComponent } from './merchandising.component';
import { MerchandisingRoutingModule } from './merchandising-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MerchandisingStoreModule } from '../../../app/stores/merchandising/merchandising-store.module';
import { MatTableModule } from '@angular/material/table';
import { GmbtImgModule, GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [MerchandisingComponent],
  imports: [
    CommonModule,
    MerchandisingRoutingModule,
    ViewModule,
    GmbtTypographyModule,
    GmbtImgModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MerchandisingStoreModule,
    MatTableModule,
  ],
  exports: [MerchandisingComponent],
})
export class MerchandisingUsModule {}
