import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFirreBase: AngularFireAuth) { }

  login(correo:string, password:string){
    return this.authFirreBase.signInWithEmailAndPassword(correo, password) //Aqui me devuelve una promeesa desde firebase
  }

  logut(){
    this.authFirreBase.signOut();
  }
  
  estadoLogin(){
    return this.authFirreBase.authState
  }

}
