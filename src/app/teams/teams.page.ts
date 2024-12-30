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
  selectedGame: { data: any } = { data: null };

  constructor(private route: ActivatedRoute,private teamsService: TeamsserviceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Received idgame:', params['idgame']);

      this.gameIndex = +params['idgame'];
        this.teamsService.getTeams(this.gameIndex).subscribe((data) => {
          console.log("DATA: ", data);
          this.selectedGame = data;
          console.log("Teams: ", this.selectedGame);
        })
      });
  }

}