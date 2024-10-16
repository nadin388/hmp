import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { NavController } from '@ionic/angular';
import { ScheduleDetailsPage } from '../schedule-details/schedule-details.page';

@Component({
  selector: 'app-our-schedules',
  templateUrl: './our-schedules.page.html',
  styleUrls: ['./our-schedules.page.scss'],
})
export class OurSchedulesPage implements OnInit {

  ourSchedules: any = []
  index = 0;
  schedule: any;

  constructor(private scheduleservice: ScheduleserviceService, public nav: NavController) { }

  ngOnInit() {
    this.ourSchedules = this.scheduleservice.ourSchedules //buat ngehubungin ke schedule service
  }
}
