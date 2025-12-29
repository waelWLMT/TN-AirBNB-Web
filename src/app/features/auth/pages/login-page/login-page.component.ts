import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private router = inject(Router);
  public authService = inject(AuthenticationService);

  email = '';
  password = '';
  errorMessage = '';

  login() {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/']); // redirection vers Home
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
    }
  }


}
