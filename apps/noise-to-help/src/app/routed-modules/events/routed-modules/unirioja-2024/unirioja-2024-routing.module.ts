import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Unirioja2024Component } from './unirioja-2024.component';

const routes: Routes = [
  {
    path: '',
    component: Unirioja2024Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Unirioja2024RoutingModule {}
