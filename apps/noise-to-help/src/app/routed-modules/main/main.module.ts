import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ViewModule } from '../../modules/view/view.module';
import { TwoColumnsLayoutModule } from '../../modules/two-columns-layout/two-columns-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GmbtAlertModule, GmbtCardModule, GmbtImgModule, GmbtTypographyModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ViewModule,
    GmbtTypographyModule,
    GmbtCardModule,
    GmbtImgModule,
    TwoColumnsLayoutModule,
    MatButtonModule,
    RouterModule,
    GmbtAlertModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
