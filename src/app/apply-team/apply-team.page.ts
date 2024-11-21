import { Component, OnInit } from '@angular/core';
import { ProposalserviceService } from '../proposalservice.service';

@Component({
  selector: 'app-apply-team',
  templateUrl: './apply-team.page.html',
  styleUrls: ['./apply-team.page.scss'],
})
export class ApplyTeamPage implements OnInit {

  proposals:any=[];

  constructor(private proposal:ProposalserviceService) { }

  ngOnInit() {
    this.proposals = this.proposal
  }
  
}
