import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-download-link-text',
  templateUrl: './download-link-text.component.html',
  styleUrls: ['./download-link-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtDownloadLinkTextComponent {
  @Input() link!: string;
  @Input() fileName!: string;
}
