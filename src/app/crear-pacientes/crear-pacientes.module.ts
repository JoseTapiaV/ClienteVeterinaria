import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPacientesPageRoutingModule } from './crear-pacientes-routing.module';

import { CrearPacientesPage } from './crear-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearPacientesPageRoutingModule
  ],
  declarations: [CrearPacientesPage]
})
export class CrearPacientesPageModule {}
