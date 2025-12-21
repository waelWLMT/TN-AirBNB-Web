import { Injectable, signal } from '@angular/core';
import { UserRole } from '../models/role.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private _user = signal<User | null>(this.loadUser());

  user = this._user.asReadonly();

  isAuthenticated(): boolean {
    return !!this._user();
  }

  hasRole(role: UserRole): boolean {
    return this._user()?.role === role;
  }

  login(email: string, password: string): boolean {
    // MOCK : on accepte tout
    const mockUser: User = {
      id: 1,
      email,
      role: email === 'admin@test.com' ? 'ADMIN' : 'USER'
    };

    localStorage.setItem('user', JSON.stringify(mockUser));
    this._user.set(mockUser);
    return true;
  }

  register(email: string, password: string, role: UserRole = 'USER'): boolean {
    // MOCK : enregistrement local
    const newUser: User = {
      id: Math.floor(Math.random() * 1000),
      email,
      role
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    this._user.set(newUser);
    return true;
  }

  logout() {
    localStorage.removeItem('user');
    this._user.set(null);
  }

  private loadUser(): User | null {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }

    getToken(): string | null {
    return localStorage.getItem('token');
  }

}
