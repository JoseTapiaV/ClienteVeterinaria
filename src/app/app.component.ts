import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Doctores', url: '/doctores', icon: 'bandage' },
    { title: 'Citas', url: '/citas', icon: 'calendar' },
    { title: 'Mi información', url: '/mi-info', icon: 'paw' },
    { title: 'Cerrar Sesión', url: '/logut', icon: 'paw' },
    { title: 'Crear-Cita', url: '/crear-cita', icon: 'paw' },
  ];
  constructor() {}
}
