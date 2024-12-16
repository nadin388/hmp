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
  arr_year: string[] = [];
  ach_tampil: { name: string, team: string, date: number }[] = []; // Mendeklarasikan tipe

  imageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private achievementService: AchievementserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame'];
      console.log('Received idgame:', this.idgame);
      this.getAchievementYears();
      this.loadAchievements();
    });
  }

  getAchievementYears() {
    this.achievementService.getAchievementYear(this.idgame).subscribe((response) => {
      if (response.result === 'OK') {
        // Pastikan response.data adalah array dan setiap item memiliki properti date
        this.arr_year = response.data.map((item: any) => String(item.date)); // Konversi ke string
        if (response.data.length > 0) {
          this.imageUrl = response.data[0].image_url;
        }
        console.log('Years fetched:', this.arr_year);
      } else {
        console.error('Failed to fetch years:', response.message);
      }
    });
  }

  loadAchievements() {
    const selectedYear = this.year === 'All' ? null : this.year;
    console.log("Selected Year:", selectedYear);  // Debugging tahun terpilih
    this.achievementService.getAchievementsByYear(this.idgame, selectedYear).subscribe(response => {
      console.log("Response from Backend:", response);  // Debugging respon backend
      if (response.result === 'OK') {
        this.ach_tampil = response.data.map((item: any) => ({
          name: item.name,
          team: item.team,
          date: item.date
        }));
        console.log('Filtered Achievements:', this.ach_tampil);  // Debugging data yang difilter
      } else {
        console.error('Failed to load achievements:', response.message);
      }
    }, error => {
      console.error("Error loading achievements:", error);  // Log error dari request
    });
  }


}
