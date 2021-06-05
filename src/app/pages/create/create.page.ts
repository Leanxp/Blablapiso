import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../../services/data/firestore.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createPisoForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private firestoreService: FirestoreService,
    formBuilder : FormBuilder,
    private router: Router
  ) {
    this.createPisoForm=formBuilder.group({
      tipoPiso: ['', Validators.required],
      dirPiso: ['', Validators.required],
      costoPiso: ['', Validators.required],
      tipoAlquiler: ['', Validators.required],
      descripcionPiso: ['', Validators.required]
    })
   }

   async createPiso(){
    const loading = await this.loadingCtrl.create();

    const tipoPiso = this.createPisoForm.value.tipoPiso;
    const dirPiso = this.createPisoForm.value.dirPiso;
    const costoPiso = this.createPisoForm.value.costoPiso;
    const tipoAlquiler = this.createPisoForm.value.tipoAlquiler;
    const descripcionPiso = this.createPisoForm.value.descripcionPiso;

    this.firestoreService.createPiso(tipoPiso,dirPiso,costoPiso, tipoAlquiler, descripcionPiso)
                          .then(
                            () => {
                              loading.dismiss().then(() => {
                                this.router.navigateByUrl('');
                              });
                            },
                            error => {
                              loading.dismiss().then(() => {
                                console.error(error);
                              });
                            }

                          );

  return await loading.present();

   }

  ngOnInit() {
  }

  
}
