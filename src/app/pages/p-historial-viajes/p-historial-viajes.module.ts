import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PHistorialViajesPageRoutingModule } from './p-historial-viajes-routing.module';

import { PHistorialViajesPage } from './p-historial-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PHistorialViajesPageRoutingModule
  ],
  declarations: [PHistorialViajesPage]
})
export class PHistorialViajesPageModule {}
