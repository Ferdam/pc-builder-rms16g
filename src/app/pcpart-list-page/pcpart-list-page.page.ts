import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { IPCPart } from '../interfaces/ipcpart';

@Component({
  selector: 'app-pcpart-list-page',
  templateUrl: './pcpart-list-page.page.html',
  styleUrls: ['./pcpart-list-page.page.scss'],
})

export class PCPartListPage implements OnInit {
  public pcPartType:any;
  public pcPartList:Array<IPCPart>;

  constructor(navParams: NavParams, public viewCtrl: ModalController) {
    this.pcPartType = navParams.get('pcPartType');
    this.pcPartList = navParams.get('pcPartList');
  }
 
  ngOnInit() {}
 
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
