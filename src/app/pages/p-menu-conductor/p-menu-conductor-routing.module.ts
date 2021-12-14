import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMenuConductorPage } from './p-menu-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: PMenuConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMenuConductorPageRoutingModule {}
