import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginV1Component } from "../../components/login-v1/login-v1.component";
import { AuthModel } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginV1Component],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private auth = inject(AuthenticationService);
  private router = inject(Router);

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  error: string | null = null;

  authenticate(authmodel: AuthModel) {    
    //const { username, password } = this.form.getRawValue();
    const success = this.auth.login(authmodel.mail ?? '', authmodel.pwd ?? '');

    if (success) {
      this.router.navigate(['/']); // redirige vers home
    } else {
      this.error = 'Identifiants invalides';
    }
  }
}
