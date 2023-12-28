import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Toys2023Component } from './toys-2023.component';

const routes: Routes = [
  {
    path: '',
    component: Toys2023Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Toys2023RoutingModule {}
