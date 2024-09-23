import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurSchedulesPageRoutingModule } from './our-schedules-routing.module';

import { OurSchedulesPage } from './our-schedules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurSchedulesPageRoutingModule
  ],
  declarations: [OurSchedulesPage]
})
export class OurSchedulesPageModule {}
