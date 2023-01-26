import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';

@Component({
  selector: 'app-crear-pacientes',
  templateUrl: './crear-pacientes.page.html',
  styleUrls: ['./crear-pacientes.page.scss'],
})
export class CrearPacientesPage implements OnInit {

  pacienteForm!: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.pacienteForm = this.fb.group({
      nombre: [''],
      numCel: [''],
      nombreMascota: [''],
      edadMascota: [''],
      tipoMascota: [''],
      razaMascota: ['']
    })
  }

  savePaciente(){
    if(!this.pacienteForm.valid){
      return false;
    }else{
      this.pacienteService.create(this.pacienteForm.value);
      console.log('Paciente creado exitosamente!');
      this.pacienteForm.reset();
      this.router.navigate(['/mi-info']);
    }
    return true;
  }

}
