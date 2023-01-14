import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-dot',
  templateUrl: './carousel-dot.component.html',
  styleUrls: ['./carousel-dot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselDotComponent {
  @Input() isSelected = false;
}
