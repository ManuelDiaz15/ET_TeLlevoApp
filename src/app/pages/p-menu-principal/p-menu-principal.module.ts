import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMenuPrincipalPageRoutingModule } from './p-menu-principal-routing.module';

import { PMenuPrincipalPage } from './p-menu-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMenuPrincipalPageRoutingModule
  ],
  declarations: [PMenuPrincipalPage]
})
export class PMenuPrincipalPageModule {}
