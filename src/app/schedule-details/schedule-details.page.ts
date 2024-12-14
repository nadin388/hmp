import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {

  constructor(private scheduleservice: ScheduleserviceService, private route:ActivatedRoute) { }

  ourSchedules:any=[];
  index = 0;
  schedule: any;

  ngOnInit() {
    this.ourSchedules = this.scheduleservice.getOurSchedule;

    // Mengambil parameter index dari route
    this.route.params.subscribe(params => {
      this.index = +params['index'];  

      this.schedule = this.ourSchedules[this.index];
    });

    
  }

}
