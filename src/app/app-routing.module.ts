import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'game',
    loadChildren: () => import('./what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./who-we-are/who-we-are.module').then( m => m.WhoWeArePageModule)
  },
  {
    path: 'schedules',
    loadChildren: () => import('./our-schedules/our-schedules.module').then( m => m.OurSchedulesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
