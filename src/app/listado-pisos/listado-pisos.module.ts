import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPisosPageRoutingModule } from './listado-pisos-routing.module';

import { ListadoPisosPage } from './listado-pisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPisosPageRoutingModule
  ],
  declarations: [ListadoPisosPage]
})
export class ListadoPisosPageModule {}
