import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422027/game.php");
  }

  getWhoWeAre(): Observable<any>{
    return this.http.get("https://ubaya.xyz/hybrid/160422027/whoweare.php");
  }

  addLikesWhoWeAre():Observable<any>{
    return this.http.get("https://ubaya.xyz/hybrid/160422027/addlikes.php");
  }
}
