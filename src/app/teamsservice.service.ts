import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TeamsserviceService {

  games =[
    {
      game_name: 'Valorant',
      url : 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain',
      teams: [
        {
          team_name: 'Team A',
          members: [
            {
              member_name: 'ShadowStrike',
              role: 'Duelist',
              photo_url: 'https://i.ytimg.com/vi/gu3SLmtUMH0/maxresdefault.jpg'
            },
            {
              member_name: 'ViperX',
              role: 'Controller',
              photo_url: 'https://tn.com.ar/resizer/cD9srB-bao6xwiakABFt_hFyjHM=/767x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/SO5IB45JHBGR5CB36RMPDPFC2Q.png'
            },
            {
              member_name: 'BlandeNova',
              role: 'Sentinel',
              photo_url: 'https://th.bing.com/th/id/OIP.5EnWeivrJ5fzVO5TuNUvGQHaEK?rs=1&pid=ImgDetMain'
            }
          ]
        },
        {
          team_name: 'Team B',
          members: [
            {
              member_name: 'SarahLaura',
              role: 'Controller',
              photo_url: 'https://img.esportsku.com/wp-content/uploads/2022/06/Onic-Vior.jpg'
            },
            {
              member_name: 'CenniaLieta',
              role: 'Sentine',
              photo_url: 'https://esports.id/img/content/39820201231061243.jpg'
            },
            {
              member_name: 'NadineChou',
              role: 'Duelist',
              photo_url: 'https://api.duniagames.co.id/api/content/upload/file/11837806181598859227.jpg'
            }
          ]
        }
        
      ]
    },
    {
      game_name: 'Mobile Legends',
      url: 'https://wallpaperset.com/w/full/c/7/2/235463.jpg',
      teams: [
        {
          team_name: 'Team X',
          members: [
            {
              member_name: 'LunarBlade',
              role: 'Assassin',
              photo_url: 'https://cdn.oneesports.id/cdn-data/sites/2/2023/01/322980745_644508487472052_306065664735734287_n-1024x575.jpg'
            },
            {
              member_name: 'MysticTank',
              role: 'Tank',
              photo_url: 'https://i0.wp.com/esportsnesia.com/wp-content/uploads/2021/03/RRQ-Hoshi-R7.jpg'
            },
            {
              member_name: 'ArcaneMage',
              role: 'Mage',
              photo_url: 'https://cdn.oneesports.id/cdn-data/sites/2/2022/12/320626601_874336834012598_7570974727589879931_n-1-1024x576.jpg'
            }
          ]
        },
        {
          team_name: 'Team Y',
          members: [
            {
              member_name: 'BladeDancer',
              role: 'Marksman',
              photo_url: 'https://superlive.id/storage/articles/673f2290-1f63-4902-953a-a0f463955aac.jpg'
            },
            {
              member_name: 'IronFist',
              role: 'Fighter',
              photo_url: 'https://www.rappler.com/tachyon/2023/01/kairi-onic-esports-january-7-2022.jpg'
            },
            {
              member_name: 'SpiritHealer',
              role: 'Support',
              photo_url: 'https://cdn.idntimes.com/content-images/duniaku/post/20230203/295229887-430896855629856-1173924387325333567-n-3a0acd8fce4ad2fff8ae20a96f0353da.jpg'
            }
          ]
        }
      ]
    },
    {
      game_name: 'PUBG',
      url:'https://th.bing.com/th/id/OIP.xoZ4c__3DE36dPCScAxP1wHaEK?rs=1&pid=ImgDetMain',
      teams: [
        {
          team_name: 'Squad Alpha',
          members: [
            {
              member_name: 'SniperKing',
              role: 'Sniper',
              photo_url: 'https://th.bing.com/th/id/OIP.nZH0o9MkvMdcqfRzUoYQJQHaE8?rs=1&pid=ImgDetMain'
            },
            {
              member_name: 'SilentShadow',
              role: 'Scout',
              photo_url: 'https://www.zoomtecnologico.com/wp-content/uploads/2023/08/amd-gamer-a.webp'
            },
            {
              member_name: 'HeavyGunner',
              role: 'Support',
              photo_url: 'https://www.iwmbuzz.com/wp-content/uploads/2022/09/amit-sharma-aka-desi-gamers-networth-gaming-career-real-life-and-more.jpg'
            }
          ]
        },
        {
          team_name: 'Squad Bravo',
          members: [
            {
              member_name: 'QuickShot',
              role: 'Assault',
              photo_url: 'https://th.bing.com/th/id/OIP.K_GXyUbguCYDhfjXawKLzAHaE8?rs=1&pid=ImgDetMain'
            },
            {
              member_name: 'StealthRider',
              role: 'Driver',
              photo_url: 'https://brandmen.org/wp-content/uploads/2023/04/gamers-colombia.png'
            },
            {
              member_name: 'MedicX',
              role: 'Medic',
              photo_url: 'https://img.interempresas.net/fotos/3274299.jpeg'
            }
          ]
        }
      ]
    }
  ];

  constructor() { }
}