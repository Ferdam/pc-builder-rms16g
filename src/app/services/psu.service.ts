import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class PSUsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'Super Flower LEADEX III 750W',
      full_desc: 'Super Flower LEADEX III 750W 80 PLUS GOLD Full Modular SF-750F14HG',
      price: 'R$ 770,00'
    },
    {
      id: '002',
      short_desc: 'CORSAIR CX550 550W',
      full_desc: 'CORSAIR CX550 550W 80 PLUS BRONZE, CP-9020121-BR',
      price: 'R$ 330,00'
    }
  ];

  public getPSUList(): Array<IPCPart> {
    return this.partList;
  }
  public getPSUbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
