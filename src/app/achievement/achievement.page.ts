import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchievementserviceService } from '../achievementservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  achievements: { data: any } = { data: null };
  idgame: number = 0;

  index = 0;
  year: string = "All";
  arr_year: string[] = []
  ach_tampil: string[] = []

  // Menyimpan image_url untuk ditampilkan
  imageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private achievementService: AchievementserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame']; // Ambil idgame dari parameter route
      console.log('Received idgame:', this.idgame);
      this.getAchievementYears(); // Fetch tahun berdasarkan idgame
      this.loadAchievements(); // Load achievements berdasarkan idgame
    });
  }

  getAchievementYears() {
    this.achievementService.getAchievementYear(this.idgame).subscribe((response) => {
      if (response.result === 'OK') {
        // Menyaring hanya tahun yang ada di response
        this.arr_year = response.data.map((item: any) => item.date.toString());
        // Ambil image_url dari data pertama yang diterima
        if (response.data.length > 0) {
          this.imageUrl = response.data[0].image_url; // Set image URL
        }
        console.log('Years fetched:', this.arr_year);
      } else {
        console.error('Failed to fetch years:', response.message);
      }
    });
  }

  loadAchievements() {
    this.achievementService.getAchievementPerTeam(this.idgame).subscribe((response) => {
      if (response.result === 'OK') {
        // Jika respons berhasil, simpan data pencapaian ke dalam variabel `achievements`
        this.achievements = response.data;
        console.log("Achievements loaded:", this.achievements);
      } else {
        // Jika respons gagal, tampilkan pesan error
        console.error("Failed to load achievements:", response.message);
      }
    });
  }
}
