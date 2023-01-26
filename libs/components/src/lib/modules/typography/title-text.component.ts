import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'gmbt-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GmbtTitleTextComponent {}
