import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LOGO_ASOCIACION_DE_SALUD_MENTAL_DE_LA_RIOJA } from '../../../../app/data/logos';
import { UiStoreFacade } from '../../../../app/stores/ui/ui-store-facade';

@Component({
  selector: 'app-blanket-2021',
  templateUrl: './blanket-2021.component.html',
  styleUrls: ['./blanket-2021.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Blanket2021Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_ASOCIACION_DE_SALUD_MENTAL_DE_LA_RIOJA);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_ASOCIACION_DE_SALUD_MENTAL_DE_LA_RIOJA);
  }
}
