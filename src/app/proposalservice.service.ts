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
  
}
