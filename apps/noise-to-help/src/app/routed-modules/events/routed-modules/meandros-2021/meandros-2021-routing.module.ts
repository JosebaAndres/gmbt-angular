import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Meandros2021Component } from './meandros-2021.component';

const routes: Routes = [
  {
    path: '',
    component: Meandros2021Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meandros2021RoutingModule {}
