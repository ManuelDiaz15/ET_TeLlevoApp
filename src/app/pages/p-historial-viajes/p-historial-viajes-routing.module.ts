import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PHistorialViajesPage } from './p-historial-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: PHistorialViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PHistorialViajesPageRoutingModule {}
