import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PCPartListPage } from './pcpart-list-page.page';

const routes: Routes = [
  {
    path: '',
    component: PCPartListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PCPartListPageRoutingModule {}
