import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrionesBeerDay2023Component } from './briones-beer-day-2023.component';

const routes: Routes = [
  {
    path: '',
    component: BrionesBeerDay2023Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrionesBeerDay2023RoutingModule {}
