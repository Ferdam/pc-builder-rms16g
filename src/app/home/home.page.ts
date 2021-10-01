import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PCPartListPage } from '../pcpart-list-page/pcpart-list-page.page';

import { CPUsService } from '../services/cpus.service';
import { GPUsService } from '../services/gpus.service';
import { RAMsService } from '../services/rams.service';
import { SSDsService } from '../services/ssds.service';
import { PSUsService } from '../services/psu.service';
import { MOBOsService } from '../services/mobo.service';
import { CasesService } from '../services/cases.service';
import { CoolersService } from '../services/coolers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public lstCPUs    = new CPUsService().getCPUList();
  public lstGPUs    = new GPUsService().getGPUList();
  public lstRAMs    = new RAMsService().getRAMList();
  public lstSSDs    = new SSDsService().getSSDList();
  public lstPSUs    = new PSUsService().getPSUList();
  public lstMOBOs   = new MOBOsService().getMoboList();
  public lstCases   = new CasesService().getCaseList();
  public lstCoolers = new CoolersService().getCoolerList();

  private setPCPartTypes: Object = {
    CPU    : this.lstCPUs,
    GPU    : this.lstGPUs,
    RAM    : this.lstRAMs,
    SSD    : this.lstSSDs,
    PSU    : this.lstPSUs,
    MOBO   : this.lstMOBOs,
    Case   : this.lstCases,
    Cooler : this.lstCoolers, 
  }

  private setSelectedPCParts: Object = {
    CPU    : null,
    GPU    : null,
    RAM    : null,
    SSD    : null,
    PSU    : null,
    MOBO   : null,
    Case   : null,
    Cooler : null,
  }

  private currentModal;
  public totalPrice: any = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(0);

  constructor(public modalController: ModalController) {
    for (let item of Object.keys(this.setPCPartTypes)) {
      this.setPCPartTypes[item].isSelected = false;
    }
    document.addEventListener('pc-part-selected', (event: CustomEvent) => {
      console.table(event.detail);
      this.setSelectedPCParts[event.detail.pcPartType] = event.detail.pcPartInfo;
      this.currentModal.dismiss();
      this.calculateTotalPrice();
    });
    document.addEventListener('pc-part-removed', (event: CustomEvent) => {
      console.table(event.detail);
      this.setSelectedPCParts[event.detail.pcPartType] = null;
      this.currentModal.dismiss();
      this.calculateTotalPrice();
    });
  }

  async calculateTotalPrice() {
    this.totalPrice = 0;
    for (let item of Object.keys(this.setSelectedPCParts)) {
      // this.totalPrice += this.setSelectedPCParts[item] ? Number.parseInt(this.setSelectedPCParts[item].price.replaceAll(/R\$ (\d*)\.(\d*),\d\d/g, '$1$2')) : 0;
      this.totalPrice += this.setSelectedPCParts[item] ? Number.parseInt(this.setSelectedPCParts[item].price.replaceAll(/[^\d]/g, '$1$2')) : 0;
      console.log(this.totalPrice);
      
    }
    this.totalPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.totalPrice);
  }

  async openPCPartModal(pcPartType) {

    const modal = await this.modalController.create(
      {
        component: PCPartListPage,
        componentProps: { pcPartType: pcPartType, pcPartList: this.setPCPartTypes[pcPartType] }
      }
    );
    this.currentModal = modal;
    return await modal.present();
  }

  getPCPartTypesList() { return Object.keys(this.setPCPartTypes); }

  getSelected(pcPartType) {
    return this.setSelectedPCParts[pcPartType];
  }
}
