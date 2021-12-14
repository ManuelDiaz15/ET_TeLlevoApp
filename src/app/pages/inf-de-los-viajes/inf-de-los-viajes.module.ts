import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfDeLosViajesPageRoutingModule } from './inf-de-los-viajes-routing.module';

import { InfDeLosViajesPage } from './inf-de-los-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfDeLosViajesPageRoutingModule
  ],
  declarations: [InfDeLosViajesPage]
})
export class InfDeLosViajesPageModule {}
