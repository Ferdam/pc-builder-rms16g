import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'NZXT H510i Mid Tower RGB',
      full_desc: 'NZXT H510i Mid Tower RGB CA-H510I-B1',
      price: 'R$ 420,00'
    },
    {
      id: '002',
      short_desc: 'Corsair Carbide SPEC-05 Mid Tower',
      full_desc: 'Corsair Carbide SPEC-05 Mid Tower CC-9011138-WW',
      price: 'R$ 800,00'
    }
  ];

  public getCaseList(): Array<IPCPart> {
    return this.partList;
  }
  public getCasebyId(id: number): IPCPart {
    return this.partList[id];
  }
}
