import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';
import { FormArray, FormGroup } from '@angular/forms';
import { getAuth } from 'firebase/auth';
import { RutinesService } from '../services/rutines.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicios-form',
  templateUrl: './ejercicios-form.component.html',
  styleUrls: ['./ejercicios-form.component.scss'],
})
export class EjerciciosFormComponent implements OnInit {
  formulario: FormGroup;
  formRutina: FormArray;
  isSubmitted = false;
  auth = getAuth();
  user = this.auth.currentUser;

  idUser = '';

  constructor(
    private service: EjerciciosService,
    private serviceRutines: RutinesService,
    private loadingCtrl: LoadingController
  ) {
    this.formulario = service.formulario;
    this.formRutina = service.formulario.get('rutina') as FormArray;
  }

  ngOnInit() {
    this.service
      .getEjerciciosData()
      .subscribe((value) => this.deleteRutine(value));
    if (this.user !== null) {
      console.log(this.user.uid);
      this.service.formulario.get('idUser')?.setValue(this.user.uid);
    }
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }

  get errorControl() {
    return this.formulario.controls;
  }

  deleteRutine(value: number): void {
    return this.formRutina.removeAt(value);
  }

  async onSubmit(): Promise<any> {
    this.isSubmitted = true;
    if (!this.formulario.valid) {
      return false;
    } else {
      await this.serviceRutines.addRutine(this.formulario.value);
      this.showLoading();
      location.reload();
    }
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
}
