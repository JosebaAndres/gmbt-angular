import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Guitar2023Component } from './guitar-2023.component';

const routes: Routes = [
  {
    path: '',
    component: Guitar2023Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guitar2023RoutingModule {}
