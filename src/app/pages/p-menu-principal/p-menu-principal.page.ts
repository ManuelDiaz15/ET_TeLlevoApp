import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-p-menu-principal',
  templateUrl: './p-menu-principal.page.html',
  styleUrls: ['./p-menu-principal.page.scss'],
})
export class PMenuPrincipalPage {

  constructor(private router:Router,public toastController: ToastController, public alertController: AlertController) { }

  ingresaPasajero(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-menu-usuario'],navigationExtras);
  }
  ingresaConductor(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-menu-conductor'],navigationExtras);
  }


}
