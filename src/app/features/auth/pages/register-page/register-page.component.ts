import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  private router = inject(Router);
  public authService = inject(AuthenticationService);

  email = '';
  password = '';
  isAdmin = false; // sera true si admin checkbox coché

  register() {
    const role = this.isAdmin ? 'ADMIN' : 'USER';
    this.authService.register(this.email, this.password, role);
    this.router.navigate(['/']); // redirection Home
  }

}


