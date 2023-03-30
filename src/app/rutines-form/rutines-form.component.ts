import { Component, Input, OnInit } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rutines-form',
  templateUrl: './rutines-form.component.html',
  styleUrls: ['./rutines-form.component.scss'],
})
export class RutinesFormComponent implements OnInit {
  data: string[] = [];
  idx: any;

  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.service.getSubRowRutine(form) as FormArray;
  }

  form: FormGroup = new FormGroup({});
  formArray: any;

  constructor(private service: EjerciciosService) {}

  ngOnInit() {}

  addSubArray(): void {
    this.service.clickAddSubArray(this.form);
  }

  deleteSubArray(index: number): void {
    this.formArray.removeAt(index);
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
