import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EjerciciosComponent } from './ejercicios.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [EjerciciosComponent],
  exports: [EjerciciosComponent],
})
export class EjerciciosModule {}
