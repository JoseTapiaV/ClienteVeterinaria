import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : AngularFirestore,
            private authFirreBase: AngularFireAuth) { }

  crearDocumeneto(data:any, path: string, id: any){
    const collection = this.firestore.collection(path)
    return collection.doc(id).set(data)
  }

  registrarUser(correo:string, password:string){
    return this.authFirreBase.createUserWithEmailAndPassword(correo, password)
  }


}
