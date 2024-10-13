import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsserviceService } from '../teamsservice.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  team: any;
  members: string[] = [];  // Inisialisasi dengan array kosong

  constructor(
    private route: ActivatedRoute,
    private teamsservice: TeamsserviceService
  ) { }

  ngOnInit() {
    // Ambil index tim dari parameter URL, pastikan teamIndex bukan null
    const teamIndex = this.route.snapshot.paramMap.get('teamIndex');
    
    if (teamIndex !== null) {
      const selectedIndex = parseInt(teamIndex, 10);

      // Ambil tim dan anggota dari service berdasarkan index
      this.team = this.teamsservice.teams[selectedIndex];
      this.members = this.team.member_name;
    }
  }

}
