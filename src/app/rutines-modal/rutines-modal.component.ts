import { Component, Input, OnInit } from '@angular/core';
import { RutinesService } from '../services/rutines.service';
import { Rutines } from '../interfaces/rutines';

@Component({
  selector: 'app-rutines-modal',
  templateUrl: './rutines-modal.component.html',
  styleUrls: ['./rutines-modal.component.scss'],
})
export class RutinesModalComponent implements OnInit {
  data: Rutines[] = [];
  constructor(private rutinesService: RutinesService) {}
  @Input() rutineId: any;
  ngOnInit() {
    this.rutinesService.getRutine().subscribe((value) => {
      const data = value.filter((val) => val.id === this.rutineId);
      this.data = data;
    });
  }
}
