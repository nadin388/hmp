import { Injectable } from '@angular/core';

export interface Teams{
  url: string;
  team_name: string[];
  member_name: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TeamsserviceService {

  teams: Teams[] = [
    {
      url: 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain',
      team_name: ['Team A', 'Team B', 'Team C'],
      member_name: ['Player 1', 'Player 2', 'Player 3']
    },
    {
      url: 'https://th.bing.com/th/id/OIP.RH7kZirQyDxOjOLQGawKFQHaEK?rs=1&pid=ImgDetMain',
      team_name: ['Team A', 'Team B', 'Team C'],
      member_name: ['Player 4', 'Player 5', 'Player 6']
    }, {
      url: 'https://th.bing.com/th/id/OIP.UAkzJulkbWCyXnAixCnKJAHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      team_name: ['Team A', 'Team B', 'Team C'],
      member_name: ['Player 7', 'Player 8', 'Player 9']
    }
  ]

  constructor() { }
}
