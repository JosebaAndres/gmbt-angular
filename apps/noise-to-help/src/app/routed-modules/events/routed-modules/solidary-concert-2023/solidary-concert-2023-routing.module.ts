import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolidaryConcert2023Component } from './solidary-concert-2023.component';

const routes: Routes = [
  {
    path: '',
    component: SolidaryConcert2023Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolidaryConcert2023RoutingModule {}
