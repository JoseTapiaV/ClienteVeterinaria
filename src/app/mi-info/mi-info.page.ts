import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../servicios/paciente.service';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mi-info',
  templateUrl: './mi-info.page.html',
  styleUrls: ['./mi-info.page.scss'],
})
export class MiInfoPage implements OnInit {
  pacientes?:any[];

  constructor(
    private pacienteService: PacienteService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.listAllPacientes();
  }

  listAllPacientes(){
    this.pacienteService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.pacientes = data;
      console.log(this.pacientes);
    });
  }

  async deletePaciente(id: string){    
    const alert = await this.alertController.create({
      header: '¿Esta seguro que desea eliminar el registro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',          
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.pacienteService.delete(id).then(() => {
              this.listAllPacientes();
              console.log('Cita eliminada exitosamente!')
            }).catch(err => console.log(err));
          },
        },
      ],
    });
    await alert.present();    
  }

}
