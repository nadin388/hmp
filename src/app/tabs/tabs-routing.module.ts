import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      }, 
      {
        path: 'what-we-play',
        loadChildren: () => import('../what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
      }, 
      {
        path: 'who-we-are',
        loadChildren: () => import('../who-we-are/who-we-are.module').then( m => m.WhoWeArePageModule)
      },
      {
        path: 'our-schedules',
        loadChildren: () => import('../our-schedules/our-schedules.module').then( m => m.OurSchedulesPageModule)
      }
    ]
  }, 
  {
    path:'',
    redirectTo: '/tabs/what-we-play',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
