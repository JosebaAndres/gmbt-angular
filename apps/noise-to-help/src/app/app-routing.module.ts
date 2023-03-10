import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./routed-modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./routed-modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'partners',
    loadChildren: () => import('./routed-modules/partners/partners.module').then((m) => m.PartnersModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./routed-modules/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./routed-modules/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'collaborate',
    loadChildren: () => import('./routed-modules/collaborate/collaborate.module').then((m) => m.CollaborateModule),
  },
  {
    path: 'merchandising',
    loadChildren: () =>
      import('./routed-modules/merchandising/merchandising.module').then((m) => m.MerchandisingUsModule),
  },
  {
    path: 'contributions',
    loadChildren: () =>
      import('./routed-modules/contributions/contributions.module').then((m) => m.ContributionsModule),
  },
  {
    path: 'questions',
    loadChildren: () => import('./routed-modules/questions/questions.module').then((m) => m.QuestionsUsModule),
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
