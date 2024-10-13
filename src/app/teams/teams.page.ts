import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsserviceService, Teams } from '../teamsservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  gameBannerUrl!: string;
  teams!: Teams[];
  selectedTeam!: Teams | null;

  constructor(private teamsService: TeamsserviceService) {}

  ngOnInit() {
    // Ambil data dari service, contoh untuk Valorant
    const game = this.teamsService.const_games.find(g => g.game_name === 'Valorant');
    
    if (game) {
      this.gameBannerUrl = game.teams[0].url;  // URL banner dari tim pertama
      this.teams = game.teams;
    }
  }

  selectTeam(team: Teams) {
    this.selectedTeam = team;
  }
}