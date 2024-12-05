import { Component, OnInit} from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  idmember: string = ""

  packages = [
    {
      name: 'what-we-play',
      bg: '/assets/game.png'
    },
    {
      name: 'who-we-are',
      bg: '/assets/member.png'
    }, 
    {
      name: 'our-schedules',
      bg: '/assets/schedules.png'
    }
  ]
  
  constructor() {}

  ngOnInit() {
    
  }
}