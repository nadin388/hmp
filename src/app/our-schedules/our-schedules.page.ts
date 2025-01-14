import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-our-schedules',
  templateUrl: './our-schedules.page.html',
  styleUrls: ['./our-schedules.page.scss'],
})
export class OurSchedulesPage implements OnInit {

  schedules: { data: any[] } = { data: [] };

  constructor(private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.scheduleservice.getOurSchedule().subscribe((data) => {
      console.log("DATA: ", data);
      this.schedules = data;
      console.log("Schedules after assignment: ", this.schedules);
    })
  }
}
