import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfDeLosViajesPage } from './inf-de-los-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: InfDeLosViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfDeLosViajesPageRoutingModule {}
