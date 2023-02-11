import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';
import { GmbtButtonModule } from '@gmbt-angular/components';
import { ExampleModule } from '../../../../modules/example/example.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ButtonRoutingModule, GmbtButtonModule, ExampleModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
