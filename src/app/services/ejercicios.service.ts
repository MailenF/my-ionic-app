import { Injectable } from '@angular/core';
import { DataGrupoEjercicios } from '../interfaces/data-grupo-ejercicios';
import { BehaviorSubject, filter, from, Observable, Subject } from 'rxjs';
import { GrupoEjercicios } from '../interfaces/grupo-ejercicios';
import { Ejercicios } from '../interfaces/ejercicios';
import { DataEjercicios } from '../interfaces/data-ejercicios';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { Rutines } from '../interfaces/rutines';

@Injectable({
  providedIn: 'root',
})
export class EjerciciosService {
  formulario: FormGroup = this.form();
  ejercicios: Ejercicios[] = [];
  dataContainer: string[] = [];
  value = '';

  private ejercicioSeleccionado$: BehaviorSubject<Ejercicios[]> =
    new BehaviorSubject<Ejercicios[]>([]);

  private idxEjercicios$: Subject<number> = new Subject<number>();

  constructor(private fb: FormBuilder) {}

  form(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
      rutina: this.fb.array([], [Validators.required]),
    });
  }

  addRutinaForm(value: string): void {
    this.dataContainer.push(value);
    const ctrl = this.formulario.get('rutina') as FormArray;
    ctrl.push(this.createRutine());
  }

  createRutine(): FormGroup {
    let ejercicio = this.value;
    return this.fb.group({
      ejercicio: new FormControl(ejercicio, [Validators.required]),
      repeticiones: new FormControl([Validators.required]),
      series: new FormControl([Validators.required]),
      subRowArray: this.fb.array([]),
    });
  }

  clickAddSubArray(rowCtrl: FormGroup): void {
    const ctrl = this.createRutineSubArray();
    const form = this.getSubRowRutine(rowCtrl);
    form.push(ctrl);
  }

  createRutineSubArray(): FormGroup {
    return this.fb.group({
      rep: new FormControl(),
      ser: new FormControl(),
    });
  }

  getSubRowRutine(ctrl: FormGroup): FormArray {
    return ctrl.get('subRowArray') as FormArray;
  }

  getAllGrupoEjercicios(): Observable<GrupoEjercicios[]> {
    // Simulo proceso de llamada HTTP
    return from([DataGrupoEjercicios]);
  }

  addEjercicioSeleccionado(data: string): void {
    // Simulo proceso de llamada HTTP
    this.ejercicios = DataEjercicios.filter((values) =>
      values.grupo.includes(data)
    );
    this.ejercicioSeleccionado$.next(this.ejercicios);
  }

  getEjercicioSeleccionado(): Observable<Ejercicios[]> {
    return this.ejercicioSeleccionado$.asObservable();
  }

  ejerciciosData(value: string): void {
    this.value = value;
    if (this.dataContainer.includes(value)) {
      let idx = this.dataContainer.indexOf(value);
      this.idxEjercicios$.next(idx);
      this.dataContainer.splice(idx, 1);
    }
  }

  getEjerciciosData(): Observable<number> {
    return this.idxEjercicios$.asObservable();
  }
}
