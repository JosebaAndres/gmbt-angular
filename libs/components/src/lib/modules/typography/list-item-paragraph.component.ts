import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';

export type GmbtListItemParagraphComponentType = 'primary' | 'secondary';

@Component({
  selector: 'gmbt-list-item-paragraph',
  templateUrl: './list-item-paragraph.component.html',
  styleUrls: ['./list-item-paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtListItemParagraphComponent implements OnChanges {
  @Input() type: GmbtListItemParagraphComponentType = 'primary';

  isPrimary = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshIsPrimary();
  }

  private refreshIsPrimary() {
    if (this.type === 'primary') {
      this.isPrimary = true;
    } else {
      this.isPrimary = false;
    }
  }
}
