import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Piso} from '../../models/pisos.interface';
import {FirestoreService} from '../../services/data/firestore.service';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public piso: Piso;
  constructor(
    private firestoreService:FirestoreService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    const pisoId: string = this.route.snapshot.paramMap.get('id');
    this.firestoreService.getPisosDetail(pisoId).subscribe(piso =>{
      this.piso=piso;
    });
  }

  async deletePiso(pisoId: string, dirPiso: string): Promise<void>{
    const alert = await this.alertController.create({
      message: 'Desea eliminar el Inmueble?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: blah =>{
            console.log('Cancelar: blah ');
          },
        },
        {
          text: 'Okay',
          handler: ()=>{
            this.firestoreService.deletePiso(this.piso.id).then(()=>{
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });
    await alert.present();
  }
}
