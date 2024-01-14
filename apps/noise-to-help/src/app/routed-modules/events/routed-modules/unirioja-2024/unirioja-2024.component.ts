import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LOGO_MONOCICLOS_COM_1 } from '../../../../../app/data/logos';
import { UiStoreFacade } from '../../../../stores/ui/ui-store-facade';

@Component({
  selector: 'app-unirioja-2024',
  templateUrl: './unirioja-2024.component.html',
  styleUrls: ['./unirioja-2024.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Unirioja2024Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_MONOCICLOS_COM_1);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_MONOCICLOS_COM_1);
  }
}
