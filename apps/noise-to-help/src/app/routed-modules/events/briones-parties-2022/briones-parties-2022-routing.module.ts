import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrionesParties2022Component } from './briones-parties-2022.component';

const routes: Routes = [
  {
    path: '',
    component: BrionesParties2022Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrionesParties2022RoutingModule {}
