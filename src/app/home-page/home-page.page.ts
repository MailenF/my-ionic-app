import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { EjerciciosService } from '../services/ejercicios.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
  constructor(private service: EjerciciosService) {}

  ngOnInit() {
    if (this.user !== null) {
      const uid = this.user.uid;
    }
  }
}
