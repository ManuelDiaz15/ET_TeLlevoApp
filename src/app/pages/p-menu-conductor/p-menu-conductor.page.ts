import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../../googlemaps/googlemaps.component';

@Component({
  selector: 'app-p-menu-conductor',
  templateUrl: './p-menu-conductor.page.html',
  styleUrls: ['./p-menu-conductor.page.scss'],
})
export class PMenuConductorPage implements OnInit {

  constructor(private activeroute: ActivatedRoute,private router:Router, public alertController: AlertController, public navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }
  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Seguro que quieres salir?',
      buttons: [{ text: 'No',handler: () => {}}, 
      { text: 'Si',handler: () => {
      localStorage.removeItem('ingresado');
      this.navCtrl.navigateRoot('home');
          }
        }
      ]
    });
    await alert.present();
  }

  nuevodestino(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-nueva-ruta']);
  }
  historialViajes(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/p-historial-viajes']);
  }
  async addDirection() {

    const ubicacion = null;
    let positionInput = {  
      lat: -33.0336892,
      lng: -71.5331841
    };
    if (ubicacion !== null) {
        positionInput = ubicacion; 
    }

    const modalAdd  = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {position: positionInput}
    });
    await modalAdd.present();

    const {data} = await modalAdd.onWillDismiss();
    if (data) {
      console.log('data -> ', data);
      // this.cliente.ubicacion = data.pos;
      // console.log('this.cliente -> ', this.cliente);
    }

  }

}
