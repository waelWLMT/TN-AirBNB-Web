import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _isAuthenticated = signal(!!localStorage.getItem('token'));

  get isAuthenticated() {
    return this._isAuthenticated();
  }

  login(username: string, password: string) {
    // mock login
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'mock-jwt-token');
      this._isAuthenticated.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this._isAuthenticated.set(false);
  }

   getToken(): string | null {
    return localStorage.getItem('token'); // <-- méthode getToken existante
  }
  
}
