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

  schedule: { data: any } = { data: null };
  idevent: number = 0;
  idteam: number = 0;

  ngOnInit() {

    // Mengambil parameter index dari route
    this.route.params.subscribe(params => {
      console.log('Received idevent:', params['idevent']);
      console.log('Received idteam:', params['idteam']);

      this.idevent = +params['idevent'];
      this.idteam = +params['idteam'];

        this.scheduleservice.getScheduleDetail(this.idevent, this.idteam).subscribe((data) => {
          console.log("Schedule Details: ", data);
          this.schedule = data;
      });
    });
  }
}
