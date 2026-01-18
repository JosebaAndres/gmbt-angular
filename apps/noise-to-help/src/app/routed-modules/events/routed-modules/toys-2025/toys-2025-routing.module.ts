import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Toys2025Component } from './toys-2025.component';

const routes: Routes = [
  {
    path: '',
    component: Toys2025Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Toys2025RoutingModule {}
