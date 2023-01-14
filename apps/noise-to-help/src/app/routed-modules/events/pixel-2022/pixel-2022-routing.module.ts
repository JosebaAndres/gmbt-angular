import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pixel2022Component } from './pixel-2022.component';

const routes: Routes = [
  {
    path: '',
    component: Pixel2022Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pixel2022RoutingModule {}
