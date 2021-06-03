import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FirestoreService} from '../services/data/firestore.service';
import {Piso} from '../models/pisos.interface';

@Component({
  selector: 'app-listado-pisos',
  templateUrl: './listado-pisos.page.html',
  styleUrls: ['./listado-pisos.page.scss'],
})
export class ListadoPisosPage implements OnInit {
  public pisosList: Observable<Piso[]>;
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.pisosList = this.firestoreService.getPisosList();
  }

}
