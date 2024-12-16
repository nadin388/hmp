import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Achievement {
  url: string;
  name: string;
  year: string[];
  achievement: string[];
}

@Injectable({
  providedIn: 'root'
})

export class AchievementserviceService {

  constructor(private http: HttpClient) { }

  getAchievementYear(idgame: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422027/getachievementyear.php?idgame=" + idgame);
  }

  getAchievementsByYear(idgame: number, date: string | null): Observable<any> {
    const url = date
      ? `https://ubaya.xyz/hybrid/160422027/getachievementpergame.php?idgame=${idgame}&date=${date}`
      : `https://ubaya.xyz/hybrid/160422027/getachievementpergame.php?idgame=${idgame}&date=`;

    console.log("Constructed URL:", url); // Debugging URL
    return this.http.get(url);
  }
}
