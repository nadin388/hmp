import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsserviceService } from '../teamsservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  index=0;
  teams:any

  constructor(
    private route: ActivatedRoute,
    private teamsservice: TeamsserviceService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.index = params['index']; 
      this.teams = this.teamsservice.teams[this.index];
    });
  }

}
