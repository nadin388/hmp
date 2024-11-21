import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProposalserviceService {

  constructor() { }

  proposals = [
    {
      idproposal: 1,
      teamName: 'IONIQ',
      gameName: 'Mobile Legends',
      description: 'Mau join donk',
      idMember: 1,
      status: 'WAITING'
    },
    {
      idproposal: 2,
      teamName: 'E-Gladiators',
      gameName: 'League of Legends',
      description: 'Tim kami sangat solid dan siap bersaing!',
      idMember: 2,
      status: 'APPROVED'
    },
    {
      idproposal: 3,
      teamName: 'StormBreakers',
      gameName: 'Valorant',
      description: 'Kami memiliki strategi kuat untuk menang.',
      idMember: 3,
      status: 'REJECTED'
    },
    {
      idproposal: 4,
      teamName: 'DragonSlayers',
      gameName: 'Dota 2',
      description: 'Tim kami memiliki pengalaman di turnamen besar.',
      idMember: 4,
      status: 'WAITING'
    },
    {
      idproposal: 5,
      teamName: 'PhoenixFlames',
      gameName: 'PUBG',
      description: 'Kami adalah tim yang penuh semangat dan kerja keras.',
      idMember: 5,
      status: 'APPROVED'
    }
  ];  
}
