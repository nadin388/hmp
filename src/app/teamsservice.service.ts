import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Detail {
  idgame?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamsserviceService {
  constructor(private http: HttpClient) { }

  getTeams(idgame: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422027/getteams.php?idgame=" + idgame);
  }

  // getTeamsMembers(idteam: number, idgame: number): Observable<any> {
  //   return this.http.get("https://ubaya.xyz/hybrid/160422027/getteammember.php?idteam=" + idteam + "&idgame=" + idgame);
  // }

  getTeamsMembers(idteam: number, idgame: number): Observable<any> {
    const url = `https://ubaya.xyz/hybrid/160422027/getteammember.php?idteam=${idteam}&idgame=${idgame}`;
    console.log('Fetching data from URL:', url);
    return this.http.get(url);
  }
  
}