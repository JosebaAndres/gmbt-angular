import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gmbt-carousel-dot',
  templateUrl: './carousel-dot.component.html',
  styleUrls: ['./carousel-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtCarouselDotComponent {
  @Input() isSelected = false;
}
