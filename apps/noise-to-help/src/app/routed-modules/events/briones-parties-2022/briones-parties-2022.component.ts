import { ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UiStoreFacade } from '../../../stores/ui/ui-store-facade';
import { LOGO_CICLO_XXI, LOGO_UCRANIA_EUSKADY } from '../../../../app/data/logos';

@Component({
  selector: 'app-briones-parties-2022',
  templateUrl: './briones-parties-2022.component.html',
  styleUrls: ['./briones-parties-2022.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrionesParties2022Component implements OnInit, OnDestroy {
  constructor(private uiStoreFacade: UiStoreFacade) {}

  ngOnInit(): void {
    this.uiStoreFacade.addSignature(LOGO_CICLO_XXI);
    this.uiStoreFacade.addSignature(LOGO_UCRANIA_EUSKADY);
  }

  ngOnDestroy(): void {
    this.uiStoreFacade.removeSignature(LOGO_CICLO_XXI);
    this.uiStoreFacade.removeSignature(LOGO_UCRANIA_EUSKADY);
  }
}
