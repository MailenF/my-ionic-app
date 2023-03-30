import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
  getAuth,
} from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  formularioRegister: FormGroup = this.formRegister();
  formularioLogin: FormGroup = this.formLogin();
  authState$ = authState(this.afAuth);

  constructor(private fb: FormBuilder, private afAuth: Auth) {}

  formRegister(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  formLogin(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async register(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(
      this.afAuth,
      email,
      password
    );
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logOut() {
    return signOut(this.afAuth);
  }
}
