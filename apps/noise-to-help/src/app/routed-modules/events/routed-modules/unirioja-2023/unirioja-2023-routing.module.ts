import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Unirioja2023Component } from './unirioja-2023.component';

const routes: Routes = [
  {
    path: '',
    component: Unirioja2023Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unirioja2023RoutingModule {}
