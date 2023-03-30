import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  user$ = this.auth.authState$.pipe(filter((state) => (state ? true : false)));
  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  async logOut() {
    this.showLoading();
    await this.auth.logOut();
    location.reload();
    this.router.navigate(['/login-page']);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 1000,
      spinner: 'circles',
    });

    loading.present();
  }
}
