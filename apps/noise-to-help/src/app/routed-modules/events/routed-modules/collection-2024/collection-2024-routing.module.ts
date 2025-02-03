import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Collection2024Component } from './collection-2024.component';

const routes: Routes = [
  {
    path: '',
    component: Collection2024Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Collection2024RoutingModule {}
