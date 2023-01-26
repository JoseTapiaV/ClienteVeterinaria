import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../servicios/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.page.html',
  styleUrls: ['./editar-paciente.page.scss'],
})
export class EditarPacientePage implements OnInit {
  
  id: any;
  pacienteForm!: FormGroup;

  constructor(
    private pacienteService: PacienteService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
      this.pacienteService.getById(this.id).subscribe(res =>{
        this.pacienteForm.setValue(res);
      })
  }

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

  updatePaciente(){
    
    if (!this.pacienteForm.valid) {
      return false;
    } else {      
      this.pacienteService.update(this.id, this.pacienteForm.value).then(() => {
        console.log('Cita actualizada exitosamente!')
        this.pacienteForm.reset();
        this.router.navigate(['/mi-info']);
      });
    }
    return true;
  }

}
