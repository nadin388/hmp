import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  
  {
    path: 'what-we-play',
    loadChildren: () => import('./what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
  }, 
  {
    path: 'achievement/:idgame',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  }, 
  {
    path: 'schedule-details/:idevent/:idteam',
    loadChildren: () => import('./schedule-details/schedule-details.module').then( m => m.ScheduleDetailsPageModule)
  },
  {
    path: 'teams/:idgame',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule) // ini mengirim parameter berupa index ke teams
  },
  {
    path: 'members/:idgame/:idteam',
    loadChildren: () => import('./members/members.module').then( m => m.MembersPageModule) // ini mengirim parameter berupa index ke members
  },
  {
    path: 'apply-team',
    loadChildren: () => import('./apply-team/apply-team.module').then( m => m.ApplyTeamPageModule)
  },
  {
    path: 'apply-team-new',
    loadChildren: () => import('./apply-team-new/apply-team-new.module').then( m => m.ApplyTeamNewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
