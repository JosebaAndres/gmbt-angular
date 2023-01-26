import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmbtCarouselComponent } from './components/carousel.component';
import { GmbtCarouselItemDirective } from './directives/carousel-item.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GmbtCarouselDotsComponent } from './components/carousel-dots.component';
import { GmbtCarouselDotComponent } from './components/carousel-dot.component';
import { GmbtResizeObserverModule } from '../resize-observer/resize-observer.module';

@NgModule({
  declarations: [GmbtCarouselComponent, GmbtCarouselItemDirective, GmbtCarouselDotsComponent, GmbtCarouselDotComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, GmbtResizeObserverModule],
  exports: [GmbtCarouselComponent, GmbtCarouselItemDirective],
})
export class GmbtCarouselModule {}
