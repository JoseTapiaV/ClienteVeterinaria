import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPacientePageRoutingModule } from './editar-paciente-routing.module';

import { EditarPacientePage } from './editar-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarPacientePageRoutingModule
  ],
  declarations: [EditarPacientePage]
})
export class EditarPacientePageModule {}
