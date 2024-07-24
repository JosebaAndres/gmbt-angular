import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { take, takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { UiStoreFacade } from '../../../app/stores/ui/ui-store-facade';
import { MerchandisingStoreFacade } from '../../../app/stores/merchandising/merchandising-store-facade';
import { WomanSizeModel } from '../../../app/models/woman-size-model';
import { ManSizeModel } from '../../../app/models/man-size-model';
import { ShortSizeModel } from '../../../app/models/short-size-model';
import { LOGO_CAMISETAS_AHORA, LOGO_CHICXS } from '../../../app/data/logos';
import { DataSource } from '@angular/cdk/collections';

export class WomanSizesDataSource extends DataSource<WomanSizeModel> {
  constructor(private data: Observable<WomanSizeModel[]>) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<WomanSizeModel[]> {
    return this.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

export class ManSizesDataSource extends DataSource<ManSizeModel> {
  constructor(private data: Observable<ManSizeModel[]>) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ManSizeModel[]> {
    return this.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

export class ShortSizesDataSource extends DataSource<ShortSizeModel> {
  constructor(private data: Observable<ShortSizeModel[]>) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ShortSizeModel[]> {
    return this.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchandisingComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject<void>();

  womanTableDisplayedColumns: string[] = ['description', 's', 'm', 'l', 'xl', 'xxl'];
  manTableDisplayedColumns: string[] = ['description', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  paypalFormValue$!: Observable<string>;
  womanSizesDataSource!: WomanSizesDataSource;
  manSizesDataSource!: ManSizesDataSource;
  shortSizesDataSource!: ShortSizesDataSource;

  shippingForm = new FormGroup({
    withShipping: new FormControl(true, { nonNullable: true }),
  });

  constructor(private uiStoreFacade: UiStoreFacade, private merchandisingStoreFacade: MerchandisingStoreFacade) {}

  ngOnInit(): void {
    this.merchandisingStoreFacade.initForm();
    this.paypalFormValue$ = this.merchandisingStoreFacade.selectPaypalFormValue();
    this.womanSizesDataSource = new WomanSizesDataSource(this.merchandisingStoreFacade.selectWomanSizes());
    this.manSizesDataSource = new ManSizesDataSource(this.merchandisingStoreFacade.selectManSizes());
    this.shortSizesDataSource = new ShortSizesDataSource(this.merchandisingStoreFacade.selectShortSizes());
    this.merchandisingStoreFacade
      .selectWithShipping()
      .pipe(take(1))
      .subscribe((value) => {
        this.shippingForm.controls.withShipping.setValue(value);
      });
    this.shippingForm.controls.withShipping.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.merchandisingStoreFacade.setWithShipping(value);
    });
    this.uiStoreFacade.addSignature(LOGO_CAMISETAS_AHORA);
    this.uiStoreFacade.addSignature(LOGO_CHICXS);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_CAMISETAS_AHORA);
    this.uiStoreFacade.removeSignature(LOGO_CHICXS);
    this.destroy$.next();
  }
}
