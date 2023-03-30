import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CardGrupoEjercicioComponent } from './card-grupo-ejercicio.component';
import { EjerciciosModule } from '../ejercicios/ejercicios.module';
import { EjerciciosFormModule } from '../ejercicios-form/ejercicios-form.module';
import { RutinesFormModule } from '../rutines-form/rutines-form.module';
import { SubRutinesFormModule } from '../sub-rutines-form/sub-rutines-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjerciciosModule,
    EjerciciosFormModule,
    RutinesFormModule,
    SubRutinesFormModule,
  ],
  declarations: [CardGrupoEjercicioComponent],
  exports: [CardGrupoEjercicioComponent],
})
export class GrupoEjercicioModule {}
