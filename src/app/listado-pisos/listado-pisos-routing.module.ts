import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPisosPage } from './listado-pisos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPisosPageRoutingModule {}
