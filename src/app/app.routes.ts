import { Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { adminGuard, adminLoadGuard } from './core/guards/admin.guard';


export const routes: Routes = [
  // Login (sans auth)
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  // Home (dashboard ou landing page)
  {
    path: '',
    //canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  // Bungalows (liste et détail)
  {
    path: 'bungalows',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>      
      import('./features/bungalows/bungalows.routes').then(m=> m.BUNGALOWS_ROUTES)  
  },
  // Reservations
  {
    path: 'reservations',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./features/reservations/reservations.routes').then(m => m.RESERVATIONS_ROUTES)
  },
    // Admin (auth + rôle ADMIN, lazy loaded)
  {
    path: 'admin',
    canActivate: [adminGuard],
    canLoad: [adminLoadGuard],
    loadChildren: () =>
      import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  // Fallback 404
  {
    path: '**',
    redirectTo: ''
  }
];
