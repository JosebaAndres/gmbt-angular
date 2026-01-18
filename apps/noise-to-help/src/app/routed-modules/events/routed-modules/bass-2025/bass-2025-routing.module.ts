import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bass2025Component } from './bass-2025.component';

const routes: Routes = [
  {
    path: '',
    component: Bass2025Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bass2025RoutingModule {}
