import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AchievementserviceService } from '../achievementservice.service';


@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  index=0;
  achievements:any
  year:string ="All";
  arr_year: string[] = []
  ach_dipilih: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private achievementService: AchievementserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index']; 
    this.achievements = this.achievementService.achievements[this.index];
    });
    this.arr_year=this.generateNumberOptions(2020,2024,1);
    this.arr_year.unshift("All");
    }
  
    generateNumberOptions(start: number, end: number, step: number): string[] {
      const options: string[] = [];
      for (let i = start; i <= end; i += step) {
        options.push(i.toString());
      }
      return options;
    }

    getAchievementsByYear(item: any): string[] {
      if (this.year === "All") {
        return item.achievement; 
      } else {
        return item.achievement.filter((ach:string, index:number) => item.year[index] === this.year);
      }
    }
}
