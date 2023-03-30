import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Ejercicios } from '../interfaces/ejercicios';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss'],
})
export class EjerciciosComponent implements OnInit {
  value: any;
  ejercicios$: any;

  constructor(private service: EjerciciosService) {}

  ngOnInit() {
    this.ejerciciosSeleccionados();
  }

  ejerciciosSeleccionados(): void {
    this.service
      .getEjercicioSeleccionado()
      .subscribe((values) => (this.ejercicios$ = values));
  }

  capturar(value: any): void {
    this.service.ejerciciosData(value.ejercicio);

    if (value.selected === true) {
      this.service.addRutinaForm(value.ejercicio);
    }
  }
}
