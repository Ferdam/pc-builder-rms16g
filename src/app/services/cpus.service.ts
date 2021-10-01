import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class CPUsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'AMD Ryzen 5 5600X',
      full_desc: 'AMD Ryzen 5 5600X - 3.7GHz 6C/12T 35MB AM4',
      price: 'R$ 1.750,00'
    },
    {
      id: '002',
      short_desc: 'Intel Core i7 10700K',
      full_desc: 'Intel Core i7 10700K - 3.8GHz 8C/16T 16MB LGA1200',
      price: 'R$ 2.060,00'
    }
  ];

  public getCPUList(): Array<IPCPart> {
    return this.partList;
  }
  public getCPUbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
