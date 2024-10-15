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
    this.route.params.subscribe(params => { //fungsi subscribe yaitu mengambil parameter form sebelumnya(what we play) berupa index
      this.gameIndex = +params['index'];  

     
      this.selectedGame = this.teamsService.games[this.gameIndex]; //arayy kosong lalu dihubungkan dengan team service list games 
                                                                    //ngambil index keberapa sesuai dengan index yang dikirim dari what we play
    });
  }
}