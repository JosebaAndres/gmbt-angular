import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrionesBeerDay2024Component } from './briones-beer-day-2024.component';

const routes: Routes = [
  {
    path: '',
    component: BrionesBeerDay2024Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrionesBeerDay2024RoutingModule {}
