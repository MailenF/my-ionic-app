import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RutinesModalComponent } from './rutines-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [RutinesModalComponent],
  exports: [RutinesModalComponent],
})
export class RutinesModalModule {}
