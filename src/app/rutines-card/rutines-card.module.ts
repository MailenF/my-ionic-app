import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RutinesCardComponent } from './rutines-card.component';
import { RutinesModalModule } from '../rutines-modal/rutines-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RutinesModalModule,
  ],
  declarations: [RutinesCardComponent],
  exports: [RutinesCardComponent],
})
export class RutinesCardModule {}
