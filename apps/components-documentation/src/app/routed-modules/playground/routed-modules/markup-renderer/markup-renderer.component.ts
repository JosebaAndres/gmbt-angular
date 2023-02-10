import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-markup-renderer',
  templateUrl: './markup-renderer.component.html',
  styleUrls: ['./markup-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkupRendererComponent {}
