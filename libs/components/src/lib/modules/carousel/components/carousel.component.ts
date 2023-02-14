import { animate, AnimationBuilder, style } from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ContentChildren,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { GmbtCarouselItemDirective } from '../directives/carousel-item.directive';
import { GmbtCarouselService } from '../services/carousel-service';

const PAN_COMPUTE_INTERVAL = 25;

type CarouselPanStatus = 'undefined' | 'default' | 'pan';

@Component({
  selector: 'gmbt-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GmbtCarouselService],
})
export class GmbtCarouselComponent implements OnChanges, AfterViewInit, OnDestroy {
  private carouselWidth = new BehaviorSubject<number | null>(null);
  private carouselHeight = new BehaviorSubject<number | null>(null);
  private contentWidth: number | undefined;
  private currentSlideIndex = 0;
  private slidesLength = 0;
  private panStatus: CarouselPanStatus = 'undefined';
  private panStartX: number | undefined = undefined;
  private panStartY: number | undefined = undefined;
  private panMovementX: number | undefined = undefined;
  private panVelocityX: number | undefined = undefined;
  private panLastTime: number | undefined = undefined;
  private panLastMovementX: number | undefined = undefined;
  private destroy$ = new ReplaySubject<void>();

  @ViewChild('carouselContent', { static: true }) carouselContent!: ElementRef<HTMLDivElement>;
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;

  @Input()
  itemsMaxWidth!: number;

  @Input()
  itemsMaxHeight!: number;

  @ContentChildren(GmbtCarouselItemDirective) items!: QueryList<GmbtCarouselItemDirective>;

  carouselWidth$ = this.carouselWidth.asObservable();
  carouselHeight$ = this.carouselHeight.asObservable();
  currentSlideIsFirst$ = this.carouselService.currentSlideIsFirst$;
  currentSlideIsLast$ = this.carouselService.currentSlideIsLast$;

  constructor(
    private carouselService: GmbtCarouselService,
    private builder: AnimationBuilder,
    private ngZone: NgZone,
  ) {}

  ngOnDestroy(): void {
    // TODO: check why is this if required...
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.carousel.nativeElement.removeAllListeners) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.carousel.nativeElement.removeAllListeners();
    }
    this.destroy$.next();
  }

  ngAfterViewInit(): void {
    this.carouselService.setSlidesLength(this.items.length);
    this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.carouselService.setSlidesLength(this.items.length);
    });
    this.carouselService.currentSlideIndex$
      .pipe(
        takeUntil(this.destroy$),
        filter((currentSlideIndex) => {
          if (this.currentSlideIndex !== currentSlideIndex) {
            return true;
          } else {
            return false;
          }
        }),
      )
      .subscribe((currentSlideIndex) => {
        this.changeCurrentSlideIndex(currentSlideIndex);
      });
    this.carouselService.slidesLength$.pipe(takeUntil(this.destroy$)).subscribe((slidesLength) => {
      this.changeSlidesLength(slidesLength);
    });
    this.initGesturesBehaviours();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemsMaxWidth'] && changes['itemsMaxHeight']) {
      this.refreshCarouselSize();
    }
  }

  onResizeCarouselSizeElement(event: ResizeObserverEntry): void {
    this.setCarouselSizeElement((event.target as HTMLElement).offsetWidth);
  }

  previous(): void {
    this.carouselService.previous();
  }

  next(): void {
    this.carouselService.next();
  }

  private initGesturesBehaviours(): void {
    this.ngZone.runOutsideAngular(() => {
      this.carousel.nativeElement.addEventListener('touchstart', this.handleStart, false);
      this.carousel.nativeElement.addEventListener('touchmove', this.handleMove, false);
      this.carousel.nativeElement.addEventListener('mousedown', this.handleStart, false);
      this.carousel.nativeElement.addEventListener('mousemove', this.handleMove, false);
    });
  }

  private handleStart = (event: TouchEvent | MouseEvent): void => {
    this.panLastTime = Date.now();
    if (this.isTouchEvent(event)) {
      this.carousel.nativeElement.addEventListener('touchend', this.handleEnd, false);
      this.panStartX = event.touches[0].clientX;
      this.panStartY = event.touches[0].clientY;
    } else {
      this.carousel.nativeElement.addEventListener('mouseup', this.handleEnd, false);
      this.carousel.nativeElement.addEventListener('mouseleave', this.handleEnd, false);
      this.panStartX = event.clientX;
      this.panStartY = event.clientY;
    }
  };

  private handleMove = (event: TouchEvent | MouseEvent): void => {
    if (this.panLastTime !== undefined && this.panStartY !== undefined && this.panStartX !== undefined) {
      if (this.panStatus === 'undefined' || this.panStatus === 'pan') {
        let panMovementY: number;
        if (this.isTouchEvent(event)) {
          panMovementY = this.getTouchMoveTop(event) - this.panStartY;
          this.panMovementX = this.getTouchMoveLeft(event) - this.panStartX;
        } else {
          panMovementY = this.getMouseMoveTop(event) - this.panStartY;
          this.panMovementX = this.getMouseMoveLeft(event) - this.panStartX;
        }

        if (this.panStatus === 'undefined') {
          this.panStatus = this.resolvePanStatus(this.panMovementX, panMovementY);
        }

        if (event.cancelable) {
          event.preventDefault();
        }

        if (this.panStatus === 'pan') {
          this.refreshPanVelocityX();
          this.moveCarousel();
        }
      }
    }
  };

  handleEnd = (event: TouchEvent | MouseEvent): void => {
    if (this.isTouchEvent(event)) {
      this.carousel.nativeElement.removeEventListener('touchend', this.handleEnd, false);
    } else {
      this.carousel.nativeElement.removeEventListener('mouseup', this.handleEnd, false);
      this.carousel.nativeElement.removeEventListener('mouseleave', this.handleEnd, false);
    }
    if (this.panStatus === 'pan' && this.panVelocityX !== undefined && this.panMovementX !== undefined) {
      this.refreshPanVelocityX();
      const panVelocityX = this.panVelocityX;
      const movementXToApply = this.panMovementX;
      this.clearGesturesBehaviourValues();

      const indexRealAbsDelta = Math.abs(movementXToApply) / (this.carouselWidth.value ?? 1);
      let indexWithSensitivityAbsDelta: number;
      if ((panVelocityX > 1 && movementXToApply > 0) || (panVelocityX < -1 && movementXToApply < 0)) {
        indexWithSensitivityAbsDelta = indexRealAbsDelta;
      } else {
        indexWithSensitivityAbsDelta = indexRealAbsDelta - 0.15;
      }
      const indexResolvedDelta = Math.ceil(indexWithSensitivityAbsDelta);
      let newIndex: number;
      if (movementXToApply > 0) {
        newIndex = this.currentSlideIndex - indexResolvedDelta;
      } else {
        newIndex = this.currentSlideIndex + indexResolvedDelta;
      }
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex > this.slidesLength - 1) {
        newIndex = this.slidesLength - 1;
      }
      if (newIndex === this.currentSlideIndex) {
        this.animateCarousel();
      } else {
        this.ngZone.run(() => {
          this.carouselService.go(newIndex);
        });
      }
    } else {
      this.clearGesturesBehaviourValues();
    }
  };

  private getTouchMoveLeft(event: TouchEvent): number {
    return event.touches[0].clientX;
  }

  private getMouseMoveLeft(event: MouseEvent): number {
    return event.clientX;
  }

  private getTouchMoveTop(event: TouchEvent): number {
    return event.touches[0].clientY;
  }

  private getMouseMoveTop(event: MouseEvent): number {
    return event.clientY;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private isTouchEvent(event: any): event is TouchEvent {
    if (event?.['touches']) {
      return true;
    } else {
      return false;
    }
  }

  resolvePanStatus(panMovementX: number, panMovementY: number): CarouselPanStatus {
    if (panMovementX * panMovementX + panMovementY * panMovementY >= 25) {
      const touchAngle = (Math.atan2(Math.abs(panMovementY), Math.abs(panMovementX)) * 180) / Math.PI;
      if (touchAngle >= 45) {
        return 'default';
      } else {
        return 'pan';
      }
    } else {
      return 'undefined';
    }
  }

  private refreshPanVelocityX(): void {
    if (this.panLastTime !== undefined) {
      const now = Date.now();
      const deltaTime = now - this.panLastTime;
      if (deltaTime > PAN_COMPUTE_INTERVAL || this.panVelocityX === undefined) {
        const deltaX = (this.panMovementX ?? 0) - (this.panLastMovementX ?? 0);
        this.panLastMovementX = this.panMovementX;
        this.panLastTime = now;
        this.panVelocityX = this.getVelocityX(deltaX, deltaTime);
      }
    }
  }

  private getVelocityX(deltaX: number, deltaTime: number): number {
    return deltaX / deltaTime || 0;
  }

  private clearGesturesBehaviourValues(): void {
    this.panStatus = 'undefined';
    this.panStartX = 0;
    this.panStartY = 0;
    this.panMovementX = 0;
    this.panVelocityX = undefined;
    this.panLastTime = undefined;
    this.panLastMovementX = 0;
  }

  private changeCurrentSlideIndex(currentSlideIndex: number): void {
    this.currentSlideIndex = currentSlideIndex;
    this.animateCarousel();
  }

  private changeSlidesLength(slidesLength: number): void {
    this.slidesLength = slidesLength;
  }

  private moveCarousel(): void {
    this.playAnimation(0);
  }

  private animateCarousel(): void {
    this.playAnimation('250ms');
  }

  private getTransform(): string {
    let translateX = this.getTranslateX();
    if (translateX < 0) {
      translateX = 0;
    } else if (this.carouselWidth.value !== null && translateX > this.carouselWidth.value * (this.slidesLength - 1)) {
      translateX = this.carouselWidth.value * (this.slidesLength - 1);
    }
    return `translateX(-${translateX}px)`;
  }

  private getTranslateX(): number {
    let result = this.currentSlideIndex * (this.carouselWidth.value ?? 0);
    if (this.panMovementX) {
      result = result - this.panMovementX;
    }
    return result;
  }

  private playAnimation(timings: string | number): void {
    const myAnimation = this.builder.build([animate(timings, style({ transform: this.getTransform() }))]);
    const player = myAnimation.create(this.carouselContent.nativeElement);
    player.play();
  }

  private setCarouselSizeElement(contentWidth: number): void {
    this.contentWidth = contentWidth;
    this.refreshCarouselSize();
  }

  private refreshCarouselSize(): void {
    if (this.contentWidth && this.itemsMaxWidth && this.itemsMaxHeight) {
      let resolvedCarouselWidth: number;
      if (this.contentWidth > this.itemsMaxWidth) {
        resolvedCarouselWidth = this.itemsMaxWidth;
      } else {
        resolvedCarouselWidth = this.contentWidth;
      }
      this.carouselWidth.next(resolvedCarouselWidth);
      this.carouselHeight.next((resolvedCarouselWidth * this.itemsMaxHeight) / this.itemsMaxWidth);
      if (this.currentSlideIndex !== 0) {
        this.moveCarousel();
      }
    } else {
      this.carouselWidth.next(0);
      this.carouselHeight.next(0);
      if (this.currentSlideIndex !== 0) {
        this.moveCarousel();
      }
    }
  }
}
