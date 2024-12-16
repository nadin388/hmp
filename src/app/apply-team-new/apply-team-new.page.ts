import { Component, OnInit } from '@angular/core';
import { ProposalserviceService } from '../proposalservice.service';

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

  constructor(private proposalservice: ProposalserviceService) {}

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
        alert('There was an error fetching games. Please try again.');
      }
    );
  }

  onGameChange() {
    if (this.selectedGame) {
      const gameId = Number(this.selectedGame);  // Pastikan menjadi angka
      if (!isNaN(gameId)) {
        this.proposalservice.getTeams(gameId).subscribe(
          (response) => {
            console.log('Data received:', response);
            if (Array.isArray(response.data)) {
              this.teams = response.data;
              console.log('Teams for', gameId, ':', this.teams);
            } else {
              console.error('Data is not an array:', response.data);
              alert('Failed to load teams. Please try again.');
            }
          },
          (error) => {
            console.error('Error fetching teams:', error);
            alert('There was an error fetching teams. Please try again.');
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
        alert('Your application has been successfully submitted!');
        console.log('Response:', response);
      },
      (error) => {
        alert('There was an error submitting your application. Please try again later.');
        console.error('Error:', error);
      }
    );
  }
}
