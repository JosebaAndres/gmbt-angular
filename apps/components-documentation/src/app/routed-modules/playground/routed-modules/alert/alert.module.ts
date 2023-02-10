import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';
import { GmbtAlertModule } from '@gmbt-angular/components';
import { ExampleModule } from '../../../../modules/example/example.module';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, AlertRoutingModule, GmbtAlertModule, ExampleModule],
  exports: [AlertComponent],
})
export class AlertModule {}
