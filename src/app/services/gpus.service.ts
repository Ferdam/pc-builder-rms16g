import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class GPUsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'RTX 3070 8GB',
      full_desc: 'MSI NVIDIA GEFORCE RTX 3070 8GB VENTUS 3X',
      price: 'R$ 7.600,00'
    },
    {
      id: '002',
      short_desc: 'RX 6700 XT 12GB',
      full_desc: 'GIGABYTE RADEON RX 6700 XT 12GB',
      price: 'R$ 6.800,00'
    }
  ];

  public getGPUList(): Array<IPCPart> {
    return this.partList;
  }
  public getGPUbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
