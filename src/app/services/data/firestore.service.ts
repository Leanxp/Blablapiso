import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import 'firebase/firestore'
import { Observable } from 'rxjs';
import {Piso} from '../../models/pisos.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }
  createPiso( 
    tipoPiso : string,
    dirPiso : string,
    costoPiso : string,
    tipoAlquiler : string,
    descripcionPiso : string

  ): Promise<void> {
    const id =this.firestore.createId();

    return this.firestore.doc(`pisoList/${id}`).set({
      id, 
      tipoPiso,
      dirPiso,
      costoPiso,
      tipoAlquiler,
      descripcionPiso,
    });
  }

  getPisosList(): Observable<Piso[]>{
    return this.firestore.collection<Piso>(`pisoList`).valueChanges();

  }

  getPisosDetail(pisoId: string): Observable<Piso>{
    return this.firestore.collection('pisoList').doc<Piso>(pisoId).valueChanges();
  }

  deletePiso(pisoId: string): Promise<void>{
    return this.firestore.doc(`pisoList/${pisoId}`).delete();
  }
}
