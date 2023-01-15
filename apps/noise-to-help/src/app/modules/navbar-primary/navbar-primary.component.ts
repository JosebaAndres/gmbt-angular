import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemModel } from '../../models/menu-item-model';
import { combineLatest } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UiStoreFacade } from '../../../app/stores/ui/ui-store-facade';
import { DeviceType } from '../../../app/models/device-type';

@Component({
  selector: 'app-navbar-primary',
  templateUrl: './navbar-primary.component.html',
  styleUrls: ['./navbar-primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animatedIcons', [
      state(
        'primaryFirst',
        style({
          top: '-32px',
        }),
      ),
      state(
        'primary',
        style({
          top: '-32px',
        }),
      ),
      state(
        'secondary',
        style({
          top: '12px',
        }),
      ),
      transition('primary => secondary', [animate('0.2s')]),
      transition('primaryFirst => secondary', [animate('0.2s')]),
      transition('secondary => primary', [animate('0.2s')]),
    ]),
  ],
})
export class NavbarPrimaryComponent implements OnInit {
  subMenuDefaultItems$!: Observable<Array<MenuItemModel>>;
  subMenuPrimaryItems$!: Observable<Array<MenuItemModel>>;
  isPhone$!: Observable<boolean>;
  isNotPhone$!: Observable<boolean>;
  animatedIconsState$!: Observable<'primaryFirst' | 'primary' | 'secondary'>;

  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.subMenuDefaultItems$ = this.uiStoreFacade.selectSubMenuDefaultItems();
    this.subMenuPrimaryItems$ = this.uiStoreFacade.selectSubMenuPrimaryItems();
    this.isPhone$ = this.uiStoreFacade
      .selectDeviceType()
      .pipe(map((value) => (value === DeviceType.phone ? true : false)));
    this.isNotPhone$ = this.isPhone$.pipe(map((value) => !value));

    this.animatedIconsState$ = combineLatest([
      this.uiStoreFacade.selectNavigating().pipe(),
      this.uiStoreFacade.selectNavigating().pipe(throttleTime(200, undefined, { trailing: true, leading: true })),
      this.uiStoreFacade.selectScrollTop(),
    ]).pipe(
      map(([navigating, navigatingThrottled, scrollTop]) => {
        if (scrollTop < 5) {
          if (navigating || navigatingThrottled) {
            return 'primaryFirst';
          } else {
            return 'primary';
          }
        } else {
          return 'secondary';
        }
      }),
    );
  }

  toggleMenu(): void {
    this.uiStoreFacade.toggleMenu();
  }
}
