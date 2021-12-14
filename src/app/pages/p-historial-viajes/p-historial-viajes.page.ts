import { Component, OnInit } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-p-historial-viajes',
  templateUrl: './p-historial-viajes.page.html',
  styleUrls: ['./p-historial-viajes.page.scss'],
})
export class PHistorialViajesPage {

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

    async presentAlert(titulo: string) {
      const alert = await this.alertController.create({
        cssClass: 'font-monR',
        header: titulo,
        buttons: ['OK'],
      });
      await alert.present();
    }
    
  }