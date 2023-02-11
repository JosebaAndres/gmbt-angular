import { ChangeDetectionStrategy, HostBinding, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[gmbt-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GmbtButtonComponent {
  @HostBinding('class.gmbt-button') gmbtButton = true;
}
