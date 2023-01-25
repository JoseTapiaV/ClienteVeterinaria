import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.page.html',
  styleUrls: ['./doctores.page.scss'],
})
export class DoctoresPage implements OnInit {
  
  login : boolean = false;

  constructor(
    private auth :AuthService,
    private toastController: ToastController,
  ) { 
    this.auth.estadoLogin().subscribe(res =>{
      if(res){
        this.mostrarMensaje("Esta logueado!!")
        this.login= true
      }else{
        this.mostrarMensaje("No esta logueado!!")
        this.login = false
      }
    })
  }

  ngOnInit() {
  }
  async mostrarMensaje(mensaje: any){
    const toast = await this.toastController.create({
      position: 'top',
      message: mensaje,
      duration:3000
    });
    toast.present();
  }



}
