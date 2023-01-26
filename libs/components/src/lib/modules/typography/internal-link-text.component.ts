import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-internal-link-text',
  templateUrl: './internal-link-text.component.html',
  styleUrls: ['./internal-link-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtInternalLinkTextComponent {
  @Input() link!: string;
}
