import { Directive, ElementRef, EventEmitter, Output, OnDestroy, NgZone } from '@angular/core';

@Directive({ selector: '[appResizeObserver]' })
export class ResizeObserverDirective implements OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private entriesMap: WeakMap<object, any>;
  private resizeObserver: ResizeObserver;

  @Output()
  resizeElement = new EventEmitter<ResizeObserverEntry>();

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {
    const target = this.el.nativeElement;
    this.entriesMap = new WeakMap();
    this.entriesMap.set(target, this);
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (this.entriesMap.has(entry.target)) {
          const comp = this.entriesMap.get(entry.target);
          comp.resizeCallback(entry);
        }
      }
    });
    this.resizeObserver.observe(target);
  }

  resizeCallback(entry: ResizeObserverEntry): void {
    this.ngZone.run(() => {
      this.resizeElement.emit(entry);
    });
  }

  ngOnDestroy(): void {
    const target = this.el.nativeElement;
    this.resizeObserver.unobserve(target);
    this.entriesMap.delete(target);
  }
}
