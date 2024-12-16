import { Component, OnInit } from '@angular/core';
import { ProposalserviceService } from '../proposalservice.service';


@Component({
  selector: 'app-apply-team',
  templateUrl: './apply-team.page.html',
  styleUrls: ['./apply-team.page.scss'],
})
export class ApplyTeamPage implements OnInit {

  
  proposals:any=[];
  idmember: string = ""
  allProposals: any = []

  constructor(private proposalservice:ProposalserviceService) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember") || "ID tidak ditemukan"
    console.log(this.idmember);
    this.loadProposal();
  }
  ionViewWillEnter() {
    this.loadProposal();
  }
  loadProposal() {
    this.proposalservice.proposalList(this.idmember).subscribe(
      (data) => {
        console.log('Fetched proposals:', data);
        this.proposals = data;
        this.allProposals = data; 
      }
    );
  }

  
}
