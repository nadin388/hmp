import { Component, OnInit } from '@angular/core';
import { ProposalserviceService } from '../proposalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-team-new',
  templateUrl: './apply-team-new.page.html',
  styleUrls: ['./apply-team-new.page.scss'],
})
export class ApplyTeamNewPage implements OnInit {
  teams: any[] = []; // Array untuk menyimpan daftar tim
  selectedGame: number | string = ''; // ID game yang dipilih
  selectedTeam: number | string = ''; // ID tim yang dipilih
  description: string = ''; // Deskripsi
  idmember: string = '';
  games: any[] = []; // Daftar game

  constructor(
    private proposalservice: ProposalserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.idmember = localStorage.getItem('app_idmember') || '0';
    console.log('Member ID:', this.idmember);

    // Ambil daftar game dari server
    this.proposalservice.getGames().subscribe(
      (data) => {
        this.games = data;
        console.log('Games:', this.games);
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  onGameChange() {
    if (this.selectedGame) {
      const gameId = Number(this.selectedGame);  // Pastikan menjadi angka
      if (!isNaN(gameId)) {
        this.proposalservice.getTeams(gameId.toString()).subscribe(
          (response) => {
            console.log('Data received:', response);
            if (Array.isArray(response.data)) {
              this.teams = response.data;
              console.log('Teams for', gameId, ':', this.teams);
            } else {
              console.error('Data is not an array:', response.data);
            }
          },
          (error) => {
            console.error('Error fetching teams:', error);
          }
        );
      } else {
        console.error('Invalid game ID:', this.selectedGame);
        alert('Please select a valid game.');
      }
    }
  }
  

  applyTeam() {
    if (!this.selectedGame || !this.selectedTeam || !this.description) {
      alert('Please fill out all fields before applying.');
      return;
    }

    this.proposalservice.submitProposal(
      Number(this.idmember),
      Number(this.selectedTeam),
      this.description
    ).subscribe(
      (response) => {
        console.log('Response:', response);
        this.router.navigate(['/apply-team']);
      },
      (error) => {
        alert('There was an error submitting your application. Please try again later.');
        console.error('Error:', error);
      }
    );
  }
}
