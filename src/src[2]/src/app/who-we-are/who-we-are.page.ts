import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  group = {
    name : 'RRQ',
    description : 'RRQ (Rex Regum Qeon) adalah salah satu organisasi eSports terbesar dan paling terkenal di Indonesia. Mereka memiliki tim yang berkompetisi di berbagai cabang game eSports, baik di tingkat nasional maupun internasional. RRQ dikenal luas karena prestasinya di berbagai turnamen dan memiliki basis penggemar yang besar.',
    image : 'https://esports.id/img/article/180220230616065757.jpeg' 
  };

  likes: number = 0; 

  tambahLikes() {
    this.likes++;
  }
}
