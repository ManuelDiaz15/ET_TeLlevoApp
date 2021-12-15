import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';
import { GooglemapsComponent } from '../../googlemaps/googlemaps.component';

@Component({
  selector: 'app-p-menu-usuario',
  templateUrl: './p-menu-usuario.page.html',
  styleUrls: ['./p-menu-usuario.page.scss'],
})


export class PMenuUsuarioPage implements OnInit {
  usuario:String

  user:any;
  users:any;
  posts:any;
  post:any={
    id: null,
    tittle:" ",
    body:" ",
    userId:null
  };

 
  constructor(private activeroute: ActivatedRoute,
     private router:Router, 
     public alertController: AlertController, 
     public navCtrl: NavController,
     private modalController: ModalController,
     private api:APIClientService) {
       
      const navigation = router.getCurrentNavigation();

    this.activeroute.queryParams.subscribe(params=>{  
      if(this.router.getCurrentNavigation().extras.state){ 
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario; 
      }
    });
   }
   datosViaje(){
    let navigationExtras: NavigationExtras={
    }
    this.router.navigate(['/inf-de-los-viajes'],navigationExtras);
  }
   ionViewWillEnter() {
    this.getUsuarios();
    this.getPosts();
  }
  getPosts() {
    this.api.getPosts().subscribe((data) => {
      this.posts =data;
      this.posts.reverse();
    });
  }
  getUsuarios() {
    this.api.getUsuarios().subscribe((data) => {
      this.users =data;
    });
  }


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
