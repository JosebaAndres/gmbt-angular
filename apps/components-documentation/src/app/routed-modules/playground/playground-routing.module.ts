import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./routed-modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'typography',
        loadChildren: () => import('./routed-modules/typography/typography.module').then((m) => m.TypographyModule),
      },
      {
        path: 'alert',
        loadChildren: () => import('./routed-modules/alert/alert.module').then((m) => m.AlertModule),
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
