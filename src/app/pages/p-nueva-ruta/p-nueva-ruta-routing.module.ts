import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PNuevaRutaPage } from './p-nueva-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: PNuevaRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PNuevaRutaPageRoutingModule {}
