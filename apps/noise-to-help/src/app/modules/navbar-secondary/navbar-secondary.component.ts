import { ChangeDetectionStrategy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiStoreFacade } from '../../../app/stores/ui/ui-store-facade';
import { DeviceType } from '../../../app/models/device-type';

@Component({
  selector: 'app-navbar-secondary',
  templateUrl: './navbar-secondary.component.html',
  styleUrls: ['./navbar-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSecondaryComponent implements OnInit {
  isPhone$!: Observable<boolean>;
  isNotPhone$!: Observable<boolean>;

  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.isPhone$ = this.uiStoreFacade
      .selectDeviceType()
      .pipe(map((value) => (value === DeviceType.phone ? true : false)));
    this.isNotPhone$ = this.isPhone$.pipe(map((value) => !value));
  }
}
