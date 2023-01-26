import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnChanges {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() imagePath: string | undefined;
  @Input() avatarPath: string | undefined;

  resolvedImagePath: SafeUrl | undefined;
  resolvedAvatarPath: SafeUrl | undefined;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagePath']) {
      this.resolveImagePath();
    }
    if (changes['avatarPath']) {
      this.resolveAvatarPath();
    }
  }

  private resolveImagePath(): void {
    if (this.imagePath) {
      this.resolvedImagePath = this.domSanitizer.bypassSecurityTrustUrl(this.imagePath);
    } else {
      this.resolvedImagePath = undefined;
    }
  }

  private resolveAvatarPath(): void {
    if (this.avatarPath) {
      this.resolvedAvatarPath = this.domSanitizer.bypassSecurityTrustStyle(`url(${this.avatarPath})`);
    } else {
      this.resolvedAvatarPath = undefined;
    }
  }
}
