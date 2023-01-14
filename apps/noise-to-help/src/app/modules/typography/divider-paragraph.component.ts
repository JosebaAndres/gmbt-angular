import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-divider-paragraph',
  templateUrl: './divider-paragraph.component.html',
  styleUrls: ['./divider-paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerParagraphComponent {}
