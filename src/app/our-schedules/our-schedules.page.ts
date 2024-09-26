import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-schedules',
  templateUrl: './our-schedules.page.html',
  styleUrls: ['./our-schedules.page.scss'],
})
export class OurSchedulesPage implements OnInit {

  ourSchedules = [
    {
      date : '05 - 09 - 2024',
      nameEvent : 'Regional Qualifer - Valorant',
      nameGame : "Valorant",
      nameTeam : 'Team A',
    },

    {
      date : '10 - 09 - 2024',
      nameEvent : 'League of Legends Workshop',
      nameGame : "LOL",
      nameTeam : 'Team C',
    },

    {
      date : '07 - 10 - 2024',
      nameEvent : 'Call of Duty Championship',
      nameGame : "COD",
      nameTeam : 'Team A',
    },

    {
      date : '11 - 11 - 2024',
      nameEvent : 'Dota 2 Livestream',
      nameGame : "Dota 2",
      nameTeam : 'Team B',
    },

    {
      date : '04 - 12 - 2024',
      nameEvent : 'Fortnite Invitational',
      nameGame : "Fortnite",
      nameTeam : 'Team A',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
