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
    return this.http.get("https://ubaya.xyz/hybrid/160422027/schedule_detail.php?idevent="+idevent+"&idteam="+idteam);
  }
}
