import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
// import { PcPartComponent } from '../pc-part/pc-part.module';
import { PcPartComponent } from '../pc-part/pc-part.component';
import { PcPartListComponent } from '../pc-part-list/pc-part-list.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, PcPartComponent]
})
export class HomePageModule {}
