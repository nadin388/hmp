import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Detail{
  idevent?:number;
  idteam?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  constructor(private http: HttpClient) { }

  getOurSchedule(): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422027/ourschedule.php");
  }

  getScheduleDetail(idevent: number, idteam: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422027/schedule_detail.php?idevent="+1+"&idteam="+3);
  }

  // ourSchedules = [
  //   {
  //     url: "https://www.enduins.com/wp-content/uploads/2018/01/esport-news-2.jpg",
  //     date: '05-09-2024',
  //     time: '10:00 AM',
  //     nameEvent: 'Regional Qualifier',
  //     nameGame: "Valorant",
  //     nameTeam: 'Team A',
  //     location: "Los Angeles, CA",
  //     description: "The Regional Qualifier for Valorant is an intense competition featuring top teams from across the region. Teams will battle for a coveted spot in the upcoming national championship. Expect sharp tactics, advanced teamwork, and strategic plays as they strive for victory in one of the most competitive eSports arenas."
  //   },

  //   {
  //     url: "https://moneyinc.com/wp-content/uploads/2016/05/eSports-750x500.jpg",
  //     date: '10-09-2024',
  //     time: '2:00 PM',
  //     nameEvent: 'League of Legends Workshop',
  //     nameGame: "LOL",
  //     nameTeam: 'Team Cs',
  //     location: "New York, NY",
  //     description: "Join us for an immersive League of Legends Workshop where players can enhance their skills. This event will focus on game mechanics, team coordination, and advanced strategies. Led by professional players, the workshop offers a rare opportunity to learn directly from the experts and improve your gameplay."
  //   },

  //   {
  //     url: "https://th.bing.com/th/id/OIP.-6kurMWnCQwHkhJ0wZpFtAHaE7?rs=1&pid=ImgDetMain",
  //     date: '07-10-2024',
  //     time: '12:00 PM',
  //     nameEvent: 'Call of Duty Championship',
  //     nameGame: "COD",
  //     nameTeam: 'Team A',
  //     location: "Chicago, IL",
  //     description: "The Call of Duty Championship is set to bring together the best teams for a thrilling showdown. Expect action-packed matches filled with high-level strategy and tactical gameplay. This event will be the pinnacle of competitive Call of Duty, where teams must give everything to claim the championship title."
  //   },

  //   {
  //     url: "https://th.bing.com/th/id/OIP.2SHjPQupGbEmkVmdA4E2fAHaE7?rs=1&pid=ImgDetMain",
  //     date: '11-11-2024',
  //     time: '3:00 PM',
  //     nameEvent: 'Dota 2 Livestream',
  //     nameGame: "Dota 2",
  //     nameTeam: 'Team B',
  //     location: "San Francisco, CA",
  //     description: "Tune in to the live stream of the highly anticipated Dota 2 match. Team B will be facing off against some of the toughest competition in the game. Watch as these elite players execute complex strategies, skillful plays, and high-pressure decisions in one of the biggest eSports events of the year."
  //   },

  //   {
  //     url: "https://th.bing.com/th/id/OIP.nJYawWp7nuXnD1J3sLx8QwHaEK?w=700&h=393&rs=1&pid=ImgDetMain",
  //     date: '04-12-2024',
  //     time: '11:00 AM',
  //     nameEvent: 'Fortnite Invitational',
  //     nameGame: "Fortnite",
  //     nameTeam: 'Team A',
  //     location: "Miami, FL",
  //     description: "The Fortnite Invitational will see the best players from around the world gather to compete in an epic battle royale. With high stakes and intense competition, this event promises to deliver non-stop action. Whether it’s quick building or sharp shooting, the players will need to bring their best to emerge victorious."
  //   },
  // ];
}
