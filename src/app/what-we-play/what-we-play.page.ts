import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayOfGames = [
    {
      name: 'Valorant',
      description: 'Valorant adalah permainan penembak taktis berbasis tim yang dikembangkan oleh Riot Games. Setiap karakter, yang disebut agen, memiliki kemampuan unik yang dapat digunakan untuk menguasai permainan dengan strategi dan keterampilan menembak.',
      image: 'https://th.bing.com/th/id/OIP.9rakECHIb12jtN_rTRuYxgHaEK?rs=1&pid=ImgDetMain' // Gambar Valorant
    },
    {
      name: 'Mobile Legends',
      description: 'Mobile Legends adalah permainan multiplayer online battle arena (MOBA) yang populer di platform mobile. Pemain membentuk tim dan bekerja sama untuk menghancurkan markas musuh dengan menggunakan karakter yang disebut hero, yang memiliki kemampuan unik.',
      image: 'https://th.bing.com/th/id/OIP.RH7kZirQyDxOjOLQGawKFQHaEK?rs=1&pid=ImgDetMain' // Gambar Mobile Legends (ganti dengan URL gambar yang benar)
    },
    {
      name: 'PUBG',
      description: 'PUBG (PlayerUnknown\'s Battlegrounds) adalah game battle royale yang memulai tren genre ini. Pemain terjun ke sebuah pulau dan harus bertarung hingga tersisa satu pemenang dengan menggunakan berbagai senjata dan strategi.',
      image: 'https://th.bing.com/th/id/OIP.UAkzJulkbWCyXnAixCnKJAHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' // Gambar PUBG (ganti dengan URL gambar yang benar)
    }
  ];

}
