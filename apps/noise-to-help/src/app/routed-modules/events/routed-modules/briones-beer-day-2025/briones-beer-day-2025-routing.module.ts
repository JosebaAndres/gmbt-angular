import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrionesBeerDay2025Component } from './briones-beer-day-2025.component';

const routes: Routes = [
  {
    path: '',
    component: BrionesBeerDay2025Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrionesBeerDay2025RoutingModule {}
