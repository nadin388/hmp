import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurSchedulesPage } from './our-schedules.page';

const routes: Routes = [
  {
    path: '',
    component: OurSchedulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSchedulesPageRoutingModule {}
