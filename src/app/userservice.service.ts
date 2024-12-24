import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username);
    body.set('password', p_password);
    const urlEncodedData = body.toString();
    //console.log('Data yang dikirim ke backend:', urlEncodedData);
    return this.http.post("https://ubaya.xyz/hybrid/160422027/login2.php", urlEncodedData, { headers });
  }

  register(fname: string, lname: string, username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('fname', fname);
    body.set('lname', lname);
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(
    "https://ubaya.xyz/hybrid/160422027/register.php", urlEncodedData, { headers });
  }
}
