import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.form = auth.formularioRegister;
  }

  ngOnInit() {}

  register(): void {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .register(email, password)
        .then(() => {
          this.presentAlert();
          this.router.navigate(['/login-page']);
        })
        .catch((error) => console.log(error));
    } else {
      this.form.markAllAsTouched();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      message: 'Tu usuario ha sido registrado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
