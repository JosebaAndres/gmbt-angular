import { ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignatureComponent implements OnChanges {
  @Input() imagePath!: string;

  resolvedImagePath!: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagePath']) {
      this.resolveImagePath();
    }
  }

  resolveImagePath(): void {
    this.resolvedImagePath = this.domSanitizer.bypassSecurityTrustUrl(this.imagePath);
  }
}
