import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    correo: "",
    password:""
  }
  constructor(private auth: AuthService,
              private toastController: ToastController,
              public navController: NavController) { }

  ngOnInit() {
  }

   async login(){
    console.log(this.credenciales);
    const respuesta = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(
      error => {
        this.mostrarMensaje("Usuario o Contraseña invalidos.")
      });
    if(respuesta){
      this.mostrarMensaje("Bienvenido!!")
      this.navController.navigateRoot('doctores')
    }
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
