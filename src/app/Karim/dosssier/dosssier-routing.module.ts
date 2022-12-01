import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosssierPage } from './dosssier.page';

const routes: Routes = [
  {
    path: '',
    component: DosssierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosssierPageRoutingModule {}
