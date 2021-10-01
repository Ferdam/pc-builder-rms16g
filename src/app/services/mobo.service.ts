import { Injectable } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Injectable({
  providedIn: 'root'
})
export class MOBOsService {

  constructor() { }

  public partList: Array<IPCPart> = [
    {
      id: '001',
      short_desc: 'Asus TUF B550M Gaming Plus',
      full_desc: 'Asus TUF B550M Gaming Plus AM4 M-ATX',
      price: 'R$ 950,00'
    },
    {
      id: '002',
      short_desc: 'MSI MAG B460 Tomahawk LGA 1200 ATX',
      full_desc: 'MSI MAG B460 Tomahawk LGA 1200 ATX',
      price: 'R$ 1.250,00'
    }
  ];

  public getMoboList(): Array<IPCPart> {
    return this.partList;
  }
  public getMobobyId(id: number): IPCPart {
    return this.partList[id];
  }
}
