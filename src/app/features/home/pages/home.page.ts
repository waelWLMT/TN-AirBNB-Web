import { Component, inject } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { AuthService } from "../../../core/services/auth.service";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div style="display: flex; height: 100vh;">

      <!-- Contenu principal -->
      <div style="flex: 1; padding: 2rem;">
        <h1>Bienvenue sur l'application</h1>
        <p>Utilisez le menu à droite pour naviguer.</p>
        <button (click)="logout()">Logout</button>
      </div>

      <!-- Menu à droite -->
      <div style="width: 200px; background-color: #f0f0f0; padding: 1rem;">
        <h3>Menu</h3>
        <ul style="list-style: none; padding: 0;">
          <li><a routerLink="/products">Produits</a></li>
          <!-- tu peux ajouter d'autres liens ici -->
        </ul>
      </div>

    </div>
  `
})
export class HomePage {
  private auth = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
