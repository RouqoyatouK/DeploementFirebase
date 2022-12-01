import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DosssierPageRoutingModule } from './dosssier-routing.module';

import { DosssierPage } from './dosssier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DosssierPageRoutingModule
  ],
  declarations: [DosssierPage]
})
export class DosssierPageModule {}
