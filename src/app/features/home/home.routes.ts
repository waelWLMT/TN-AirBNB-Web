import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';

export const HOME_ROUTES: Routes = [
  {
    path: '',       // chemin racine de la feature
    component: HomePage
  }
];
