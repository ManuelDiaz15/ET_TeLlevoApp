import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMenuConductorPageRoutingModule } from './p-menu-conductor-routing.module';

import { PMenuConductorPage } from './p-menu-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMenuConductorPageRoutingModule
  ],
  declarations: [PMenuConductorPage]
})
export class PMenuConductorPageModule {}
