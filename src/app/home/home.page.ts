import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  packages = [
    {
      name: 'what we play',
      bg: '/assets/game.png'
    },
    {
      name: 'who we are',
      bg: '/assets/member.png'
    }, 
    {
      name: 'our schedules',
      bg: '/assets/schedules.png'
    }
  ]
  
  constructor() {}
}