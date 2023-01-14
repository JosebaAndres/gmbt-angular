import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'donate-toys-2020',
    loadChildren: () => import('./donate-toys-2020/donate-toys-2020.module').then((m) => m.DonateToys2020Module),
  },
  {
    path: 'meandros-2021',
    loadChildren: () => import('./meandros-2021/meandros-2021.module').then((m) => m.Meandros2021Module),
  },
  {
    path: 'blanket-2021',
    loadChildren: () => import('./blanket-2021/blanket-2021.module').then((m) => m.Blanket2021Module),
  },
  {
    path: 'sos-refugiados-2021',
    loadChildren: () =>
      import('./sos-refugiados-2021/sos-refugiados-2021.module').then((m) => m.SosRefugiados2021Module),
  },
  {
    path: 'unirioja-2022',
    loadChildren: () => import('./unirioja-2022/unirioja-2022.module').then((m) => m.Unirioja2022Module),
  },
  {
    path: 'pixel-2022',
    loadChildren: () => import('./pixel-2022/pixel-2022.module').then((m) => m.Pixel2022Module),
  },
  {
    path: 'briones-parties-2022',
    loadChildren: () =>
      import('./briones-parties-2022/briones-parties-2022.module').then((m) => m.BrionesParties2022Module),
  },
  {
    path: 'aventum-2022',
    loadChildren: () => import('./aventum-2022/aventum-2022.module').then((m) => m.Aventum2022Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
