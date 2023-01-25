import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logut',
  templateUrl: './logut.page.html',
  styleUrls: ['./logut.page.scss'],
})
export class LogutPage implements OnInit {

  constructor(private auth: AuthService,
              public navController: NavController,
              private toastController: ToastController,) { }

  ngOnInit() {
    this.logut()
  }

  logut(){
    this.auth.logut();
    this.navController.navigateRoot('login')
    this.mostrarMensaje("Sesión finalizada!!")
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
