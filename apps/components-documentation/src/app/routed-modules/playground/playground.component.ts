import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { ThemeModel } from '../../models/theme-model';
import { PlaygroundStoreFacade } from '../../stores/playground/playground-store-facade';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent implements OnDestroy, OnInit {
  private destroy$ = new ReplaySubject<void>();

  private _selectedTheme!: string;
  get selectedTheme(): string {
    return this._selectedTheme;
  }
  set selectedTheme(value: string) {
    if (this._selectedTheme !== value) {
      this._selectedTheme = value;
      this.playgroundStoreFacade.setSelectedTheme(value);
    }
  }

  themes$ = this.playgroundStoreFacade.themes$;

  constructor(private playgroundStoreFacade: PlaygroundStoreFacade) {}

  ngOnInit(): void {
    this.playgroundStoreFacade.selectedTheme$.pipe(takeUntil(this.destroy$)).subscribe((newValue) => {
      if (newValue !== this._selectedTheme) {
        this._selectedTheme = newValue;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
