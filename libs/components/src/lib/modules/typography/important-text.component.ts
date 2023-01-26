import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-important-text',
  templateUrl: './important-text.component.html',
  styleUrls: ['./important-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtImportantTextComponent {}
