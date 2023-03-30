import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SubRutinesFormComponent } from './sub-rutines-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [SubRutinesFormComponent],
  exports: [SubRutinesFormComponent],
})
export class SubRutinesFormModule {}
