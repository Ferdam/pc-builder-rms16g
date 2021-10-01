import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class SSDsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'SSD Crucial BX500 480GB SATAIII',
      full_desc: 'SSD Crucial BX500 480GB SATAIII R:540MB/s W:500MB/s',
      price: 'R$ 420,00'
    },
    {
      id: '002',
      short_desc: 'SSD Samsung 970 EVO Plus 500GB M.2 NVMe',
      full_desc: 'SSD Samsung 970 EVO Plus 500GB M.2 NVMe R:3500MB/s W:3200MB/s',
      price: 'R$ 800,00'
    },
    {
      id: '003',
      short_desc: 'HD Seagate BarraCuda 2TB SATAIII',
      full_desc: 'HD Seagate BarraCuda 2TB 3.5 SATAIII ST2000DM008',
      price: 'R$ 340,00'
    }
  ];

  public getSSDList(): Array<IPCPart> {
    return this.partList;
  }
  public getSSDbyId(id: number): IPCPart {
    return this.partList[id];
  }
}
