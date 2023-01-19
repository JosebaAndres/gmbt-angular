import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LOGO_AVENTUM_XXI, LOGO_VOF } from '../../../../data/logos';
import { UiStoreFacade } from '../../../../stores/ui/ui-store-facade';

@Component({
  selector: 'app-aventum-2022',
  templateUrl: './aventum-2022.component.html',
  styleUrls: ['./aventum-2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aventum2022Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_VOF);
    this.uiStoreFacade.addSignature(LOGO_AVENTUM_XXI);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_VOF);
    this.uiStoreFacade.removeSignature(LOGO_AVENTUM_XXI);
  }
}
