import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarouselService } from '../services/carousel-service';

@Component({
  selector: 'app-carousel-dots',
  templateUrl: './carousel-dots.component.html',
  styleUrls: ['./carousel-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDotsComponent {
  slides$: Observable<Array<{ isSelected: boolean }>> = combineLatest([
    this.carouselService.slidesLength$,
    this.carouselService.currentSlideIndex$,
  ]).pipe(
    map(([slidesLength, currentSlideIndex]) => {
      return Array.from({ length: slidesLength }, (v, i) => {
        return {
          isSelected: i === currentSlideIndex,
        };
      });
    }),
  );

  constructor(private carouselService: CarouselService) {}

  goToSlide(index: number): void {
    this.carouselService.go(index);
  }
}
