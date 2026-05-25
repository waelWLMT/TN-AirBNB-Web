import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {


   @Output()
  authenticationEmmiter!: EventEmitter<any>;
  
  public authModel = {
    mail: '',
    pwd: ''
  };

  error: string | null = null;

  login() {    
    this.authenticationEmmiter?.next(this.authModel);
  }




}
