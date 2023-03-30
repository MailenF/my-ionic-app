import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EjerciciosFormComponent } from './ejercicios-form.component';
import { RutinesFormModule } from '../rutines-form/rutines-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RutinesFormModule,
  ],
  declarations: [EjerciciosFormComponent],
  exports: [EjerciciosFormComponent],
})
export class EjerciciosFormModule {}
