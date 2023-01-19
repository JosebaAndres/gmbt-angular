import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Unirioja2022Component } from './unirioja-2022.component';

const routes: Routes = [
  {
    path: '',
    component: Unirioja2022Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unirioja2022RoutingModule {}
