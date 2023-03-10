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
        path: 'card',
        loadChildren: () => import('./routed-modules/card/card.module').then((m) => m.CardModule),
      },
      {
        path: 'typography',
        loadChildren: () => import('./routed-modules/typography/typography.module').then((m) => m.TypographyModule),
      },
      {
        path: 'alert',
        loadChildren: () => import('./routed-modules/alert/alert.module').then((m) => m.AlertModule),
      },
      {
        path: 'markup-renderer',
        loadChildren: () =>
          import('./routed-modules/markup-renderer/markup-renderer.module').then((m) => m.MarkupRendererModule),
      },
      {
        path: 'view',
        loadChildren: () => import('./routed-modules/view/view.module').then((m) => m.ViewModule),
      },
      {
        path: 'button',
        loadChildren: () => import('./routed-modules/button/button.module').then((m) => m.ButtonModule),
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
