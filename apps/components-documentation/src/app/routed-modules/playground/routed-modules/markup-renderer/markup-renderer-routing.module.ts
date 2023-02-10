import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkupRendererComponent } from './markup-renderer.component';

const routes: Routes = [
  {
    path: '',
    component: MarkupRendererComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkupRendererRoutingModule {}
