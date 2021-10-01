import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class CoolersService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'Air Cooler Scythe Fuma 2',
      full_desc: 'Air Cooler Scythe Fuma 2 SCFM-2000 120mm',
      price: 'R$ 420,00'
    },
    {
      id: '002',
      short_desc: 'Corsair iCUE H100i PRO XT 120mm RGB',
      full_desc: 'Water Cooler Corsair iCUE H100i PRO XT Hydro Series 120mm RGB',
      price: 'R$ 800,00'
    }
  ];

  public getCoolerList(): Array<IPCPart> {
    return this.partList;
  }
  public getCoolerbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
