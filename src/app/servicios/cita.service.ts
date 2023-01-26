import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, finalize } from 'rxjs';
import { Cita } from '../entidades/Cita';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  
  idDoc = localStorage.getItem("ID")
  private dbPath = '/Doctores/'+this.idDoc+'/Citas';
  citasRef: AngularFirestoreCollection<Cita>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {    
    this.citasRef = db.collection(this.dbPath); 
  }

  getAll(): AngularFirestoreCollection<Cita> {
    return this.citasRef;
  }

  getById(id: string): Observable<any> {
    return this.citasRef.doc(id).valueChanges();
  }

  create(cita: Cita): any {
    return this.citasRef.add(cita);
  }

  update(id: string, cita: Cita): Promise<void> {
    return this.citasRef.doc(id).update(cita);
  }

  delete(id: string): Promise<void> {
    return this.citasRef.doc(id).delete();
  }

  uploadImage(file: any, path: string, nombre: string): Promise<string> {
    return new Promise(resolve => {
      const filePath = path + '/' + nombre;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            const downloadURL = res;
            resolve(downloadURL);
            return;
          });
        })
      )
        .subscribe();
    });
  }

}
