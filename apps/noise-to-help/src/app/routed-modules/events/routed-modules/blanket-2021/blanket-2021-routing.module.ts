import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Blanket2021Component } from './blanket-2021.component';

const routes: Routes = [
  {
    path: '',
    component: Blanket2021Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blanket2021RoutingModule {}
