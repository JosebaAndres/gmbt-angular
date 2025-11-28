import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Meandros2025Component } from './meandros-2025.component';

const routes: Routes = [
  {
    path: '',
    component: Meandros2025Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meandros2025RoutingModule {}
