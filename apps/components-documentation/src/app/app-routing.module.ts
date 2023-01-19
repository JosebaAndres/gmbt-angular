import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'playground', pathMatch: 'full' },
  {
    path: 'playground',
    loadChildren: () => import('./routed-modules/playground/playground.module').then((m) => m.PlaygroundModule),
  },
  { path: '**', redirectTo: 'playground' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
