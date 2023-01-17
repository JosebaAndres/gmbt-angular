import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributionsComponent } from './contributions.component';

const routes: Routes = [
  {
    path: '',
    component: ContributionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributionsRoutingModule {}
