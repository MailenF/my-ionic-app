import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RutinesFormComponent } from './rutines-form.component';
import { SubRutinesFormModule } from '../sub-rutines-form/sub-rutines-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SubRutinesFormModule,
  ],
  declarations: [RutinesFormComponent],
  exports: [RutinesFormComponent],
})
export class RutinesFormModule {}
