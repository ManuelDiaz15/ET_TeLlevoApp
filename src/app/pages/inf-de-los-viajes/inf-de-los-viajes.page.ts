import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-inf-de-los-viajes',
  templateUrl: './inf-de-los-viajes.page.html',
  styleUrls: ['./inf-de-los-viajes.page.scss'],
})
export class InfDeLosViajesPage implements OnInit {

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

  constructor(private activeroute: ActivatedRoute, private router:Router, public alertController: AlertController, public navCtrl: NavController,private modalController: ModalController, private api:APIClientService) {

    this.activeroute.queryParams.subscribe(params=>{  
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario=this.router.getCurrentNavigation().extras.state.usuario; 
      }
    });
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
}
  
