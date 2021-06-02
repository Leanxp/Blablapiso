import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlablapisoPage } from './blablapiso.page';

const routes: Routes = [
  {
    path: '',
    component: BlablapisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlablapisoPageRoutingModule {}
