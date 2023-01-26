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

  id!: any;
  datos: Cita = { 
    paciente:'',
    correo: '',
    celular: '',
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
    console.log('------------------------>', localStorage.getItem("ID"));
    console.log('ID:', this.id);
  }

  saveCita() {    
    this.datos.idDocotor = this.id;
    console.log(this.datos);
    this.citaService.create(this.datos);
    console.log('Cita creada exitosamente!');
    this.router.navigate(['/citas']);
    return true;
  }

}
