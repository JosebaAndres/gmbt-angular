import { ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DeviceType } from '../../../app/models/device-type';
import { SignatureModel } from '../../../app/models/signature-model';
import { UiStoreFacade } from '../../../app/stores/ui/ui-store-facade';
import { MenuItemModel } from '../../models/menu-item-model';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  private deviceType: DeviceType | undefined;

  sidenavOpened = false;
  subMenuItems$!: Observable<Array<MenuItemModel>>;
  signatures$!: Observable<Array<SignatureModel>>;

  @ViewChild('mainContent', { static: true, read: ElementRef }) mainContent!: ElementRef<HTMLElement>;

  constructor(
    private uiStoreFacade: UiStoreFacade,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subMenuItems$ = this.uiStoreFacade.selectSubMenuItems();
    this.signatures$ = this.uiStoreFacade.selectSignatures();

    this.uiStoreFacade
      .selectMenuOpened()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (this.sidenavOpened !== value) {
          this.sidenavOpened = value;
          this.changeDetectorRef.markForCheck();
        }
      });

    this.uiStoreFacade
      .selectDeviceType()
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.deviceType = value;
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd || event instanceof NavigationStart),
        takeUntil(this.destroy$),
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!this.deviceType || this.deviceType !== DeviceType.phone) {
            this.mainContent.nativeElement.scroll({ top: 0 });
          }
          if (this.mainContent.nativeElement.scrollTop > 32) {
            this.mainContent.nativeElement.scroll({ top: 32 });
          }
          this.uiStoreFacade.navigating(false);
        } else {
          this.uiStoreFacade.navigating(true);
        }
      });

    this.mainContent.nativeElement.addEventListener('scroll', this.mainContentScroll);
  }

  onSidenavOpenedChange(value: boolean): void {
    if (value) {
      this.uiStoreFacade.openMenu();
    } else {
      this.uiStoreFacade.closeMenu();
    }
  }

  linkClicked(): void {
    this.uiStoreFacade.closeMenu();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.mainContent.nativeElement.removeEventListener('scroll', this.mainContentScroll);
  }

  private mainContentScroll = () => {
    this.uiStoreFacade.scrollTop(this.mainContent.nativeElement.scrollTop);
  };
}
