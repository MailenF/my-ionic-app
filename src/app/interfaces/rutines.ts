export interface Rutines {
  id?: string;
  idUser: string;
  name: string;
  rutina: [
    {
      ejercicio: string;
      repeticiones: number;
      series: number;
      subRowArray: [{ rep: number; ser: number }];
    }
  ];
}
