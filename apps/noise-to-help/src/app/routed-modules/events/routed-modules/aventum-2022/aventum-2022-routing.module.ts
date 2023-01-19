import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Aventum2022Component } from './aventum-2022.component';

const routes: Routes = [
  {
    path: '',
    component: Aventum2022Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aventum2022RoutingModule {}
