import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Drum2024Component } from './drum-2024.component';

const routes: Routes = [
  {
    path: '',
    component: Drum2024Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Drum2024RoutingModule {}
