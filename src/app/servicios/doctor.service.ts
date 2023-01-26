import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Doctor } from '../entidades/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private dbPath = '/Doctores';
  doctoresRef: AngularFirestoreCollection<Doctor>;

  constructor(private db: AngularFirestore) {
    this.doctoresRef = db.collection(this.dbPath)
  }

  getAll(): AngularFirestoreCollection<Doctor> {
    return this.doctoresRef;
  }

  getById(id: string): Observable<any> {
    return this.doctoresRef.doc(id).valueChanges();
  }

  create(doctor: Doctor): any {
    return this.doctoresRef.add(doctor);
  }

  update(id: string, doctor: Doctor): Promise<void> {
    return this.doctoresRef.doc(id).update(doctor);
  }

  delete(id: string): Promise<void> {
    return this.doctoresRef.doc(id).delete();
  }

}
