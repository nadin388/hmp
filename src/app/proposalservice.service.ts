import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalserviceService {

  constructor(private http: HttpClient) { }

  proposals = [];
  link = "https://ubaya.xyz/hybrid/160422027/";

  proposalList(idmember: string): Observable<any> {
    return this.http.get(this.link + "get_proposal.php?idmember=" + idmember)
  }

<<<<<<< HEAD
  submitProposal(idmember: number, idteam: number, description: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', idmember.toString());
    body.set('idteam', idteam.toString());
    body.set('desc', description);
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "applynewpasta.php", urlEncodedData, { headers });
  }
  getGames(): Observable<any> {
    return this.http.get(this.link + "game.php");
  }
  getTeams(idgame: string): Observable<any> {
    return this.http.get(this.link + "applynewteam_team.php?idgame=" + idgame);
  }

=======
>>>>>>> 0f47cbeb1926d4d1096f37a6513688d32d29e674
}
