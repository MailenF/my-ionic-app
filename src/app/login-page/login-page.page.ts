import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {
    this.form = auth.formularioLogin;
  }

  ngOnInit() {}

  login(): void {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .logIn(email, password)
        .then(() => {
          this.showLoading();
          this.router.navigate(['/tabs/menu']);
        })
        .catch((error) => console.log(error));
    } else {
      this.form.markAllAsTouched();
    }
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
