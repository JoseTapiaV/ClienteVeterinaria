import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CitaService } from '../servicios/cita.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.page.html',
  styleUrls: ['./crear-cita.page.scss'],
})
export class CrearCitaPage implements OnInit {

  citaForm!: FormGroup;

  constructor(
    private citaService: CitaService,
    private router: Router,
    public fb: FormBuilder,
    private  firebase : AngularFirestoreCollection
  ) { }

  ngOnInit() {
    this.citaForm = this.fb.group({
      paciente: [''],
      correo: [''],
      celular: ['']
    })
  }

  saveCita() {    
    if (!this.citaForm.valid) {
      return false;
    } else {      
      this.citaService.create(this.citaForm.value).then(() => {
        console.log('Cita creada exitosamente!')
        this.citaForm.reset();
        this.router.navigate(['/citas']);
      });
    }
    return true;
  }

}
