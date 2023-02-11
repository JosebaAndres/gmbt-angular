import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  events = '';

  defaultClick() {
    this.addEvent('Default click');
  }

  private addEvent(event: string) {
    this.events += event;
  }
}
