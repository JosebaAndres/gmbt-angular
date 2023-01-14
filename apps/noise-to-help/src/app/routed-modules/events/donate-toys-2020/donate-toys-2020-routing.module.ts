import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateToys2020Component } from './donate-toys-2020.component';

const routes: Routes = [
  {
    path: '',
    component: DonateToys2020Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonateToys2020RoutingModule {}
