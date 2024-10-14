import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsserviceService } from '../teamsservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  gameIndex=0;
  selectedGame:any={};

  constructor(private route: ActivatedRoute,private teamsService: TeamsserviceService) {}

  ngOnInit() {
    // Mengambil parameter index dari route
    this.route.params.subscribe(params => {
      this.gameIndex = +params['index'];  

     
      this.selectedGame = this.teamsService.games[this.gameIndex];
    });
  }
}