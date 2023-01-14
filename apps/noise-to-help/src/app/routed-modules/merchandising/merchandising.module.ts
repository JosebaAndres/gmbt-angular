import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModule } from '../../modules/view/view.module';
import { MerchandisingComponent } from './merchandising.component';
import { MerchandisingRoutingModule } from './merchandising-routing.module';
import { TypographyModule } from '../../modules/typography/typography.module';
import { ImgModule } from '../../modules/img/img.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MerchandisingStoreModule } from '../../../app/stores/merchandising/merchandising-store.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MerchandisingComponent],
  imports: [
    CommonModule,
    MerchandisingRoutingModule,
    ViewModule,
    TypographyModule,
    ImgModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MerchandisingStoreModule,
    MatTableModule,
  ],
  exports: [MerchandisingComponent],
})
export class MerchandisingUsModule {}
