import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';

@Component({
  selector: 'app-card-grupo-ejercicio',
  templateUrl: './card-grupo-ejercicio.component.html',
  styleUrls: ['./card-grupo-ejercicio.component.scss'],
})
export class CardGrupoEjercicioComponent implements OnInit {
  grupoEjercicios: any;

  constructor(private service: EjerciciosService) {}

  ngOnInit() {
    this.getAllGrupoEjercicios();
  }

  getAllGrupoEjercicios(): void {
    this.service
      .getAllGrupoEjercicios()
      .subscribe((value) => (this.grupoEjercicios = value));
  }

  capturar(value: string): void {
    this.service.addEjercicioSeleccionado(value);
  }
}
