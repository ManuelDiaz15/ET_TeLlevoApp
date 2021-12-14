import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMenuPrincipalPage } from './p-menu-principal.page';

const routes: Routes = [
  {
    path: '',
    component: PMenuPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMenuPrincipalPageRoutingModule {}
