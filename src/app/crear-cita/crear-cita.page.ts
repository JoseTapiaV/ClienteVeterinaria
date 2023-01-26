import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CitaService } from '../servicios/cita.service';
import { Cita } from '../entidades/Cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.page.html',
  styleUrls: ['./crear-cita.page.scss'],
})
export class CrearCitaPage implements OnInit {

  idDoc = localStorage.getItem("ID")
  dbPath!: any; 
  date = new Date().toISOString().split('T')[0];
  time = new Date().toISOString().split('T')[1];
  id!: any;
  newFile: any;
  datos: Cita = { 
    nombre: '',
    numCel: '',
    nombreMascota: '',
    edadMascota: '',
    tipoMascota: '',
    razaMascota: '',
    fecha: this.date,
    hora: this.time,
    foto: '',
    idDocotor: this.id
  }

  constructor(
    private citaService: CitaService,
    private router: Router,
    public fb: FormBuilder,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activateRouter.snapshot.paramMap.get("id")
    localStorage.setItem("ID", this.id)
    this.dbPath = '/Doctores/'+this.idDoc+'/Citas';
    console.log('------------------------>', localStorage.getItem("ID"));
    console.log('ID:', this.id);
  }

  async saveCita() {    
    this.datos.idDocotor = this.id;
    console.log(this.datos);
    if (this.newFile !== undefined) {
      const res = await this.citaService.uploadImage(this.newFile, this.dbPath, this.datos.nombreMascota);
      this.datos.foto = res;
    }
    this.citaService.create(this.datos);
    console.log('Cita creada exitosamente!');
    this.router.navigate(['/citas']);
    return true;
  }

  async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((como) => {
        this.datos.foto = como.target?.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
