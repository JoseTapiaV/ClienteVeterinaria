import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Doctores', url: '/doctores', icon: 'bandage' },
    { title: 'Mis citas', url: '/citas', icon: 'calendar' },
    { title: 'Cerrar Sesión', url: '/logut', icon: 'close' },
  ];
  constructor() {}
}
