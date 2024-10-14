import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsserviceService } from '../teamsservice.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  gameIndex = 0;
  teamIndex = 0;
  selectedTeam:any={};
  selectedGame:any={};

  constructor(
    private route: ActivatedRoute,
    private teamsservice: TeamsserviceService
  ) { }

  ngOnInit() {
    // Ambil index tim dari parameter URL, pastikan teamIndex bukan null
    this.route.params.subscribe(params => {
      this.gameIndex = +params['gameIndex'];  
      this.teamIndex = +params['teamIndex']; 
      this.selectedGame = this.teamsservice.games[this.gameIndex];
      this.selectedTeam = this.teamsservice.games[this.gameIndex].teams[this.teamIndex];
    });
  }

}
