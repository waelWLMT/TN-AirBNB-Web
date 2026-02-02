import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthModel } from '../../models/auth.model';

@Component({
  selector: 'app-login-v1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-v1.component.html',
  styleUrl: './login-v1.component.scss'
})
export class LoginV1Component {


  @Output()
  authenticationEmmiter!: EventEmitter<AuthModel>;
  
  public authModel = {
    mail: '',
    pwd: ''
  };

  error: string | null = null;

  login() {    
    this.authenticationEmmiter?.next(this.authModel);
  }




}
