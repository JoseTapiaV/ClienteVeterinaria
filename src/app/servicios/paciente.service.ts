import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Paciente } from '../entidades/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  idUSER = localStorage.getItem("IDUSER")
  private dbPath = '/Clientes/'+this.idUSER;
  pacientesRef: AngularFirestoreCollection<Paciente>;

  constructor(private db: AngularFirestore) {
    this.pacientesRef = db.collection(this.dbPath); 
  }

  getAll(): AngularFirestoreCollection<Paciente> {
    return this.pacientesRef;
  }

  getById(id: string): Observable<any> {
    return this.pacientesRef.doc(id).valueChanges();
  }

  create(paciente: Paciente): any {
    return this.pacientesRef.add(paciente);
  }

  update(id: string, paciente: Paciente): Promise<void> {
    return this.pacientesRef.doc(id).update(paciente);
  }

  delete(id: string): Promise<void> {
    return this.pacientesRef.doc(id).delete();
  }
}
