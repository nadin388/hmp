import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {

  constructor(private gameService: GameserviceService) { }

  club: any;

  ngOnInit() {
    this.gameService.getWhoWeAre().subscribe((data) => {
      console.log("DATA: ", data[0]);
      this.club = data[0];
    })
  } 
}
