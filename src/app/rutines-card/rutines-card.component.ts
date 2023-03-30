import { Component, OnInit } from '@angular/core';
import { RutinesService } from '../services/rutines.service';
import { Rutines } from '../interfaces/rutines';

@Component({
  selector: 'app-rutines-card',
  templateUrl: './rutines-card.component.html',
  styleUrls: ['./rutines-card.component.scss'],
})
export class RutinesCardComponent implements OnInit {
  rutines: Rutines[] = [];
  isModalOpen = false;
  rutinaId: string | undefined = '';

  constructor(private rutinesService: RutinesService) {}

  ngOnInit() {
    this.rutinesService.getRutine().subscribe((value) => {
      this.rutines = value;
      console.log(value);
    });
  }
  setOpen(isOpen: boolean, id: string | undefined) {
    this.isModalOpen = isOpen;
    this.rutinaId = id;
  }
  setClose(): void {
    this.isModalOpen = false;
  }
}
