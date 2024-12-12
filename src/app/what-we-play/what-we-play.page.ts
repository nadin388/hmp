import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  games: any[] = [];

  constructor(
    private gameService: GameserviceService,
  ) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((data) => {
      console.log("DATA: ", data);
      this.games = data;
    })
  }

}
