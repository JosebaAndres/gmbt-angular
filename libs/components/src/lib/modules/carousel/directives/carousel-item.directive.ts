import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[gmbtCarouselItem]',
})
export class GmbtCarouselItemDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
