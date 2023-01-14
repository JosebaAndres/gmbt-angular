import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SosRefugiados2021Component } from './sos-refugiados-2021.component';

const routes: Routes = [
  {
    path: '',
    component: SosRefugiados2021Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosRefugiados2021RoutingModule {}
