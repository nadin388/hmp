import { Injectable } from '@angular/core';

export interface Teams {
  team_name: string;
  url: string;
  members: Member[];
}
export interface Member {
  member_name: string;
  role: string;
  photo_url: string;
}
export interface Games {
  game_name: string;
  teams: Teams[];
}

@Injectable({
  providedIn: 'root'
})
export class TeamsserviceService {

  const_games: Games[] = [
    {
      game_name: 'Valorant',
      teams: [
        {
          team_name: 'Team A',
          url: 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain',
          members: [
            {
              member_name: 'ShadowStrike',
              role: 'Duelist',
              photo_url: 'https://example.com/shadowstrike.jpg'
            },
            {
              member_name: 'ViperX',
              role: 'Controller',
              photo_url: 'https://example.com/viperx.jpg'
            },
            {
              member_name: 'BlandeNova',
              role: 'Sentinel',
              photo_url: 'https://example.com/blandenova.jpg'
            }
          ]
        },
        {
          team_name: 'Team B',
          url: 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain',
          members: [
            {
              member_name: 'ShadowStrike',
              role: 'Duelist',
              photo_url: 'https://example.com/shadowstrike.jpg'
            },
            {
              member_name: 'ViperX',
              role: 'Controller',
              photo_url: 'https://example.com/viperx.jpg'
            },
            {
              member_name: 'BlandeNova',
              role: 'Sentinel',
              photo_url: 'https://example.com/blandenova.jpg'
            }
          ]
        }
        
      ]
    },
    {
      game_name: 'Mobile Legends',
      teams: [
        {
          team_name: 'Team X',
          url: 'https://th.bing.com/th/id/OIP.X1-sample-url',
          members: [
            {
              member_name: 'LunarBlade',
              role: 'Assassin',
              photo_url: 'https://example.com/lunarblade.jpg'
            },
            {
              member_name: 'MysticTank',
              role: 'Tank',
              photo_url: 'https://example.com/mystictank.jpg'
            },
            {
              member_name: 'ArcaneMage',
              role: 'Mage',
              photo_url: 'https://example.com/arcanemage.jpg'
            }
          ]
        },
        {
          team_name: 'Team Y',
          url: 'https://th.bing.com/th/id/OIP.Y1-sample-url',
          members: [
            {
              member_name: 'BladeDancer',
              role: 'Marksman',
              photo_url: 'https://example.com/bladedancer.jpg'
            },
            {
              member_name: 'IronFist',
              role: 'Fighter',
              photo_url: 'https://example.com/ironfist.jpg'
            },
            {
              member_name: 'SpiritHealer',
              role: 'Support',
              photo_url: 'https://example.com/spirithaler.jpg'
            }
          ]
        }
      ]
    },
    {
      game_name: 'PUBG',
      teams: [
        {
          team_name: 'Squad Alpha',
          url: 'https://th.bing.com/th/id/OIP.Alpha-sample-url',
          members: [
            {
              member_name: 'SniperKing',
              role: 'Sniper',
              photo_url: 'https://example.com/sniperking.jpg'
            },
            {
              member_name: 'SilentShadow',
              role: 'Scout',
              photo_url: 'https://example.com/silentshadow.jpg'
            },
            {
              member_name: 'HeavyGunner',
              role: 'Support',
              photo_url: 'https://example.com/heavygunner.jpg'
            }
          ]
        },
        {
          team_name: 'Squad Bravo',
          url: 'https://th.bing.com/th/id/OIP.Bravo-sample-url',
          members: [
            {
              member_name: 'QuickShot',
              role: 'Assault',
              photo_url: 'https://example.com/quickshot.jpg'
            },
            {
              member_name: 'StealthRider',
              role: 'Driver',
              photo_url: 'https://example.com/stealthrider.jpg'
            },
            {
              member_name: 'MedicX',
              role: 'Medic',
              photo_url: 'https://example.com/medicx.jpg'
            }
          ]
        }
      ]
    }
  ];

  constructor() { }
}