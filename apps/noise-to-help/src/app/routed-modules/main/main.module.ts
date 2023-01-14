import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ViewModule } from '../../modules/view/view.module';
import { TypographyModule } from '../../modules/typography/typography.module';
import { CardModule } from '../../modules/card/card.module';
import { ImgModule } from '../../modules/img/img.module';
import { TwoColumnsLayoutModule } from '../../modules/two-columns-layout/two-columns-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../../modules/alert/alert.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ViewModule,
    TypographyModule,
    CardModule,
    ImgModule,
    TwoColumnsLayoutModule,
    MatButtonModule,
    RouterModule,
    AlertModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
