import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { NgIf } from '@angular/common';


@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <h2>Login</h2>
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="username" placeholder="Username" />
      <input type="password" formControlName="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p *ngIf="error" style="color:red;">{{ error }}</p>
  `
})
export class LoginPage {

  private auth = inject(AuthenticationService);
  private router = inject(Router);

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  error: string | null = null;

  submit() {
    const { username, password } = this.form.getRawValue();
    const success = this.auth.login(username ?? '', password ?? '');

    if (success) {
      this.router.navigate(['/']); // redirige vers home
    } else {
      this.error = 'Identifiants invalides';
    }
  }
}
