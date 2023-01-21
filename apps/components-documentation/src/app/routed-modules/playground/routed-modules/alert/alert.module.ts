import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';
import { GmbtAlertModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, AlertRoutingModule, GmbtAlertModule],
  exports: [AlertComponent],
})
export class AlertModule {}
