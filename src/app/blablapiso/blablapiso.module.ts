import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlablapisoPageRoutingModule } from './blablapiso-routing.module';

import { BlablapisoPage } from './blablapiso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlablapisoPageRoutingModule
  ],
  declarations: [BlablapisoPage]
})
export class BlablapisoPageModule {}
