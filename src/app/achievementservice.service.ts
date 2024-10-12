import { Injectable } from '@angular/core';

export interface Achievement{
  url: string;
  name: string;
  year: string[];
  achievement: string[];
}

@Injectable({
  providedIn: 'root'
})

export class AchievementserviceService {

  achievements: Achievement[] = [
    {
      url: 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain',
      name: 'Valorant',
      year:[
        '2023', '2024', '2022', '2020', '2021','2023', '2020', '2021','2020'
      ],
      achievement:[
        'Champions of the Regional Valorant Showdown - Team A (2023)',
        'Best Defensive Team Award - Team A (2024)',
        'MVP of the Season - Team B (2022)',
        'Flawless Victory at the Spring Valorant Cup - Team A (2020)',
        'Top 4 Finish in the International Valorant Championship - Team C (2021)',
        'Top 8 Finish in the International Valorant Championship - Team A (2023)',
        'MVP of the Season - Team C (2020)',
        'Best Fraggered Team Award - Team A (2021)',
        'Best Support Team - Team B (2020)'
      ]
     },
     {
      url: 'https://th.bing.com/th/id/OIP.RH7kZirQyDxOjOLQGawKFQHaEK?rs=1&pid=ImgDetMain',
      name: 'Mobile Legend',
      year:[
        '2023', '2024', '2022', '2020', '2021','2023', '2020', '2021','2020'
      ],
      achievement:[
        'MVP of The Tournament - Team A (2023)',
        'Best Draft Strategy - Team A (2024)',
        'Epic Comeback Champion - Team B (2022)',
        'Best Teamwork - Team A (2020)',
        'Top 4 Finish in the International Mobile Legend Championship - Team C (2021)',
        'Most Popular Team - Team A (2023)',
        'MVP of the Season - Team C (2020)',
        'Best Fraggered Team Award - Team A (2021)',
        'Longest Unbeaten Streak - Team A (2020)'
      ]
     },
     {
      url: 'https://th.bing.com/th/id/OIP.UAkzJulkbWCyXnAixCnKJAHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',
      name: 'PUBG',
      year:[
        '2023', '2024', '2022', '2020', '2021','2023', '2021', '2021','2023'
      ],
      achievement:[
        'Tournament Champions - Team A (2023)',
        'Domination Team - Team B (2024)',
        'Best Rotating Team - Team B (2022)',
        'Best Teamwork - Team A (2020)',
        'Ultimate Survivors - Team C (2021)',
        'Most Popular Team - Team A (2023)',
        'MVP of the Season - Team C (2021)',
        'Best Sniping Team - Team C (2021)',
        'Zone Control Master - Team B (2023)'
      ]
     }
  
  ];
  constructor() { }
}
