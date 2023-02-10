import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';
import { GmbtViewModule } from '@gmbt-angular/components';
import { ExampleModule } from '../../../../modules/example/example.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ViewRoutingModule, GmbtViewModule, ExampleModule],
  exports: [ViewComponent],
})
export class ViewModule {}
