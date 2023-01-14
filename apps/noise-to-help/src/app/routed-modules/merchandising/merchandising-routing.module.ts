import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchandisingComponent } from './merchandising.component';

const routes: Routes = [
  {
    path: '',
    component: MerchandisingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandisingRoutingModule {}
