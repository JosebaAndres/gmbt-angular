import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routed-modules/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'donate-toys-2020',
    loadChildren: () =>
      import('./routed-modules/donate-toys-2020/donate-toys-2020.module').then((m) => m.DonateToys2020Module),
  },
  {
    path: 'meandros-2021',
    loadChildren: () => import('./routed-modules/meandros-2021/meandros-2021.module').then((m) => m.Meandros2021Module),
  },
  {
    path: 'blanket-2021',
    loadChildren: () => import('./routed-modules/blanket-2021/blanket-2021.module').then((m) => m.Blanket2021Module),
  },
  {
    path: 'sos-refugiados-2021',
    loadChildren: () =>
      import('./routed-modules/sos-refugiados-2021/sos-refugiados-2021.module').then((m) => m.SosRefugiados2021Module),
  },
  {
    path: 'unirioja-2022',
    loadChildren: () => import('./routed-modules/unirioja-2022/unirioja-2022.module').then((m) => m.Unirioja2022Module),
  },
  {
    path: 'pixel-2022',
    loadChildren: () => import('./routed-modules/pixel-2022/pixel-2022.module').then((m) => m.Pixel2022Module),
  },
  {
    path: 'briones-parties-2022',
    loadChildren: () =>
      import('./routed-modules/briones-parties-2022/briones-parties-2022.module').then(
        (m) => m.BrionesParties2022Module,
      ),
  },
  {
    path: 'aventum-2022',
    loadChildren: () => import('./routed-modules/aventum-2022/aventum-2022.module').then((m) => m.Aventum2022Module),
  },
  {
    path: 'unirioja-2023',
    loadChildren: () => import('./routed-modules/unirioja-2023/unirioja-2023.module').then((m) => m.Unirioja2023Module),
  },
  {
    path: 'solidary-concert-2023',
    loadChildren: () =>
      import('./routed-modules/solidary-concert-2023/solidary-concert-2023.module').then(
        (m) => m.SolidaryConcert2023Module,
      ),
  },
  {
    path: 'briones-beer-day-2023',
    loadChildren: () =>
      import('./routed-modules/briones-beer-day-2023/briones-beer-day-2023.module').then(
        (m) => m.BrionesBeerDay2023Module,
      ),
  },
  {
    path: 'toys-2023',
    loadChildren: () => import('./routed-modules/toys-2023/toys-2023.module').then((m) => m.Toys2023Module),
  },
  {
    path: 'guitar-2023',
    loadChildren: () => import('./routed-modules/guitar-2023/guitar-2023.module').then((m) => m.Guitar2023Module),
  },
  {
    path: 'unirioja-2024',
    loadChildren: () => import('./routed-modules/unirioja-2024/unirioja-2024.module').then((m) => m.Unirioja2024Module),
  },
  {
    path: 'briones-beer-day-2024',
    loadChildren: () =>
      import('./routed-modules/briones-beer-day-2024/briones-beer-day-2024.module').then(
        (m) => m.BrionesBeerDay2024Module,
      ),
  },
  {
    path: 'drum-2024',
    loadChildren: () => import('./routed-modules/drum-2024/drum-2024.module').then((m) => m.Drum2024Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
