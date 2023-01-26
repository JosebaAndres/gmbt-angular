import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmbtResizeObserverDirective } from './resize-observer.directive';

@NgModule({
  declarations: [GmbtResizeObserverDirective],
  imports: [CommonModule],
  exports: [GmbtResizeObserverDirective],
})
export class GmbtResizeObserverModule {}
