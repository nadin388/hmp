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
        this.arr_year = response.data.map((item: any) => item.date.toString());
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
    this.achievementService.getAchievementPerTeam(this.idgame).subscribe((response) => {
      console.log('API Response:', response); // Log data
      if (response.result === 'OK') {
        if (this.year !== 'All') {
          this.ach_tampil = response.data.filter((achievement: any) => achievement.date === this.year);
        } else {
          this.ach_tampil = response.data;
        }
        console.log("Achievements loaded:", this.ach_tampil);
      } else {
        console.error("Failed to load achievements:", response.message);
      }
    });
  }
}
