import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LOGO_CICLO_XXI, LOGO_SOS_REFUGIADOS } from '../../../../app/data/logos';
import { UiStoreFacade } from '../../../stores/ui/ui-store-facade';

@Component({
  selector: 'app-sos-refugiados-2021',
  templateUrl: './sos-refugiados-2021.component.html',
  styleUrls: ['./sos-refugiados-2021.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SosRefugiados2021Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_CICLO_XXI);
    this.uiStoreFacade.addSignature(LOGO_SOS_REFUGIADOS);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_CICLO_XXI);
    this.uiStoreFacade.removeSignature(LOGO_SOS_REFUGIADOS);
  }
}
