import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CarouselService {
  private slidesLength = new BehaviorSubject<number>(0);
  private currentSlideIndex = new BehaviorSubject<number>(0);
  private currentSlideIsFirst = new BehaviorSubject<boolean>(true);
  private currentSlideIsLast = new BehaviorSubject<boolean>(false);

  currentSlideIsFirst$ = this.currentSlideIsFirst.asObservable();
  currentSlideIsLast$ = this.currentSlideIsLast.asObservable();
  currentSlideIndex$ = this.currentSlideIndex.asObservable();
  slidesLength$ = this.slidesLength.asObservable();

  private refreshCurrentSlideIsFirst(): void {
    if (this.currentSlideIndex.value === 0) {
      this.currentSlideIsFirst.next(true);
    } else {
      this.currentSlideIsFirst.next(false);
    }
  }

  private refreshCurrentSlideIsLast(): void {
    if (this.currentSlideIndex.value + 1 === this.slidesLength.value) {
      this.currentSlideIsLast.next(true);
    } else {
      this.currentSlideIsLast.next(false);
    }
  }

  setSlidesLength(value: number): void {
    this.slidesLength.next(value);
    if (this.currentSlideIndex.value + 1 > value) {
      this.currentSlideIndex.next(value - 1);
    }
    this.refreshCurrentSlideIsFirst();
    this.refreshCurrentSlideIsLast();
  }

  previous(): void {
    if (this.currentSlideIndex.value !== 0) {
      this.go((this.currentSlideIndex.value - 1 + this.slidesLength.value) % this.slidesLength.value);
    }
  }

  next(): void {
    if (this.currentSlideIndex.value + 1 <= this.slidesLength.value) {
      this.go((this.currentSlideIndex.value + 1) % this.slidesLength.value);
    }
  }

  go(index: number): void {
    this.currentSlideIndex.next(index);
    this.refreshCurrentSlideIsFirst();
    this.refreshCurrentSlideIsLast();
  }
}
