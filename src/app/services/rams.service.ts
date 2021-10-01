import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class RAMsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'Crucial BALLISTIX 8GB DDR4',
      full_desc: 'Crucial BALLISTIX 8GB DDR4 3000MHz CL15',
      price: 'R$ 265,00'
    },
    {
      id: '002',
      short_desc: 'Corsair Vengeance RGB Pro 8GB DDR4',
      full_desc: 'Corsair Vengeance RGB Pro 8GB DDR4 3200MHz CL16',
      price: 'R$ 425,00'
    }
  ];

  public getRAMList(): Array<IPCPart> {
    return this.partList;
  }
  public getRAMbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
