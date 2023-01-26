import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPacientesPage } from './crear-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPacientesPageRoutingModule {}
