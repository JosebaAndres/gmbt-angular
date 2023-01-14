import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselDotsComponent } from './components/carousel-dots.component';
import { CarouselDotComponent } from './components/carousel-dot.component';
import { ResizeObserverModule } from '../resize-observer/resize-observer.module';

@NgModule({
  declarations: [CarouselComponent, CarouselItemDirective, CarouselDotsComponent, CarouselDotComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, ResizeObserverModule],
  exports: [CarouselComponent, CarouselItemDirective],
})
export class CarouselModule {}
