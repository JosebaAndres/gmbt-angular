import { ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-markup-renderer',
  templateUrl: './markup-renderer.component.html',
  styleUrls: ['./markup-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtMarkupRendererComponent {}
