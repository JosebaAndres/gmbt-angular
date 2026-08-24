import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunkRockMetalHistoryBrionesComponent } from './punk-rock-metal-history-briones.component';

const routes: Routes = [
  {
    path: '',
    component: PunkRockMetalHistoryBrionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunkRockMetalHistoryBrionesRoutingModule {}
