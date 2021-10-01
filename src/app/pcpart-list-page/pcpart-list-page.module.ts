import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PCPartListPageRoutingModule } from './pcpart-list-page-routing.module';
import { PCPartListPage } from './pcpart-list-page.page';
import { PcPartListComponent } from '../pc-part-list/pc-part-list.component';
import { PcPartComponent } from '../pc-part/pc-part.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PCPartListPageRoutingModule
  ],
  declarations: [PCPartListPage, PcPartListComponent, PcPartComponent]
})
export class PCPartListPageModule {}
