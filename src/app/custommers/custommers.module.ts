import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustommersPageRoutingModule } from './custommers-routing.module';

import { CustommersPage } from './custommers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustommersPageRoutingModule
  ],
  declarations: [CustommersPage]
})
export class CustommersPageModule {}
