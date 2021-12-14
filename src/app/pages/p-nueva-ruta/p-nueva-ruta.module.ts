import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PNuevaRutaPageRoutingModule } from './p-nueva-ruta-routing.module';

import { PNuevaRutaPage } from './p-nueva-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PNuevaRutaPageRoutingModule
  ],
  declarations: [PNuevaRutaPage]
})
export class PNuevaRutaPageModule {}
