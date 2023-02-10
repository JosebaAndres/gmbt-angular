import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkupRendererComponent } from './markup-renderer.component';
import { MarkupRendererRoutingModule } from './markup-renderer-routing.module';
import { GmbtMarkupRendererModule } from '@gmbt-angular/components';

@NgModule({
  declarations: [MarkupRendererComponent],
  imports: [CommonModule, MarkupRendererRoutingModule, GmbtMarkupRendererModule],
  exports: [MarkupRendererComponent],
})
export class MarkupRendererModule {}
