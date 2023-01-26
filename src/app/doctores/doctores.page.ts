import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DoctorService } from '../servicios/doctor.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.page.html',
  styleUrls: ['./doctores.page.scss'],
})
export class DoctoresPage implements OnInit {
  
  login : boolean = false;
  doctores?:any[];

  constructor(
    private auth :AuthService,
    private toastController: ToastController,
    private doctorService: DoctorService,
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
    this.listAllDoctores();
  }

  listAllDoctores(){
    this.doctorService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.doctores = data;
      console.log(this.doctores);
      data.forEach(function(numero) {
        localStorage.setItem("idDoctor", numero.id)
      });
    });
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
