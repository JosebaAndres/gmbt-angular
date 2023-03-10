import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-external-link-text',
  templateUrl: './external-link-text.component.html',
  styleUrls: ['./external-link-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtExternalLinkTextComponent {
  @Input() link!: string;
}
