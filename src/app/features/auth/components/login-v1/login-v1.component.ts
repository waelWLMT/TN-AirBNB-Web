import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-v1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-v1.component.html',
  styleUrl: './login-v1.component.scss'
})
export class LoginV1Component {

  private authService = inject(AuthenticationService);
  private router = inject(Router);
  
  public authModel = {
    mail: '',
    pwd: ''
  };

  error: string | null = null;

  login() {
    //const { username, password } = this.form.getRawValue();
    //const success = this.auth.login(username ?? '', password ?? '');

    const success = this.authService.login(this.authModel.mail, this.authModel.pwd);

    if (success) {
      this.router.navigate(['/']); // redirige vers home
    } else {
      this.error = 'Identifiants invalides';
    }
  }




}
