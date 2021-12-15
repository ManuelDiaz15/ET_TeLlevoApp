import { Component, OnInit } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-p-nueva-ruta',
  templateUrl: './p-nueva-ruta.page.html',
  styleUrls: ['./p-nueva-ruta.page.scss'],
})

export class PNuevaRutaPage {
  hoy: any;
  user:any; 
  users:any;
  posts:any;
  post:any={
    id: null,
    title:" ",
    body:" ",
    dia: " ",
    hora:" ",
    userId:null
  };
  constructor(private router:Router, public alertController: AlertController, public navCtrl: NavController, private api:APIClientService) {}
    ionViewWillEnter() {
      this.getUsuarios();
      this.getPosts();
      this.hoy = formatDate(new Date(), 'yyyy-MM-dd','en')
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
  
    guardarPost() {
      if (this.post.body > 2000) {
        this.presentAlert('El valor del viaje no puede superar los $2.000 ');
        return;
      }
      if (this.post.userId == null) {
        if (this.user == undefined) {
          this.presentAlert('Seleccione una Ciudad');
          return;
        }
        if(this.post.dia < this.hoy) {
          this.presentAlert('La fecha ingresada no es valida');
          return;
        }
        this.presentAlert('Viaje guarrdado con éxito');
        this.router.navigate(['/p-nueva-ruta']);
        this.post.userId = this.user.id;
        this.api.createPost(this.post).subscribe();
        () => {
          this.getPosts();
        }
        error => {
        }
      } else {
  
      }
    }

    async presentAlert(titulo: string) {
      const alert = await this.alertController.create({
        cssClass: 'font-monR',
        header: titulo,
        buttons: ['OK'],
      });
      await alert.present();
    }
    limpiar(){
      let navigationExtras: NavigationExtras={
      }
      this.router.navigate(['/p-menu'],navigationExtras);
    }

  }

  
    





