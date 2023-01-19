import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LOGO_MONOCICLOS_COM_1 } from '../../../../../app/data/logos';
import { UiStoreFacade } from '../../../../stores/ui/ui-store-facade';

@Component({
  selector: 'app-unirioja-2022',
  templateUrl: './unirioja-2022.component.html',
  styleUrls: ['./unirioja-2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Unirioja2022Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_MONOCICLOS_COM_1);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_MONOCICLOS_COM_1);
  }
}
