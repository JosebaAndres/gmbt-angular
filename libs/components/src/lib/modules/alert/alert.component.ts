import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { GmbtAlertComponentType } from './alert-component-type';

@Component({
  selector: 'gmbt-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtAlertComponent implements OnChanges {
  @Input() type: GmbtAlertComponentType = 'default';

  isInfo = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      this.refreshType();
    }
  }

  private refreshType(): void {
    switch (this.type) {
      case 'info':
        this.isInfo = true;
        break;
      default:
        this.isInfo = false;
        break;
    }
  }
}
