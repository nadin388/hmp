import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  packages = [
    {
      name: 'game',
      bg: '/assets/game.png'
    },
    {
      name: 'member',
      bg: '/assets/member.png'
    }, 
    {
      name: 'schedules',
      bg: '/assets/schedules.png'
    }
  ]
  
  constructor() {}
}