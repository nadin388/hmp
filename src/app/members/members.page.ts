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
  selectedTeam: any[] = [];
  teamName: string = '';

  constructor(private route: ActivatedRoute, private teamsservice: TeamsserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Received params:', params);
  
      if (params['idgame'] && params['idteam']) {
        this.gameIndex = +params['idgame'];
        this.teamIndex = +params['idteam'];

        this.route.queryParams.subscribe(queryParams => {
          this.teamName = queryParams['nameteam'] || 'Unknown Team';
        });
  
        this.teamsservice.getTeamsMembers(this.teamIndex, this.gameIndex).subscribe((response) => {
          console.log('API Response:', response);
  
          if (response.result === 'OK') {
            this.selectedTeam = response.data;
            console.log("Selected Team Members: ", this.selectedTeam);
          } else {
            console.error("No Data Found: ", response.message);
          }
        });
      } else {
        console.error('Missing parameters idgame or idteam');
      }
    });
  }  
}
