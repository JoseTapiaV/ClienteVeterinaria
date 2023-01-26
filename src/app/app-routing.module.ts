import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'doctores',
    loadChildren: () => import('./doctores/doctores.module').then( m => m.DoctoresPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'mi-info',
    loadChildren: () => import('./mi-info/mi-info.module').then( m => m.MiInfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'logut',
    loadChildren: () => import('./logut/logut.module').then( m => m.LogutPageModule)
  },
  {
    path: 'crear-cita',
    loadChildren: () => import('./crear-cita/crear-cita.module').then( m => m.CrearCitaPageModule)
  },
  {
    path: 'crear-pacientes',
    loadChildren: () => import('./crear-pacientes/crear-pacientes.module').then( m => m.CrearPacientesPageModule)
  },
  {
    path: 'editar-paciente/:id',
    loadChildren: () => import('./editar-paciente/editar-paciente.module').then( m => m.EditarPacientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
