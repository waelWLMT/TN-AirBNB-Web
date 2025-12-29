import { inject } from '@angular/core';
import { CanActivateFn, CanLoadFn, Router, Route, UrlSegment } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

const checkAdmin = (): boolean => {
  const auth = inject(AuthenticationService);
  return auth.isAuthenticated() && auth.hasRole('ADMIN');
};

const redirectHome = () => {
  const router = inject(Router);
  router.navigate(['/']);
};

export const adminGuard: CanActivateFn = () => {
  if (!checkAdmin()) {
    redirectHome();
    return false;
  }
  return true;
};

export const adminLoadGuard: CanLoadFn = (route: Route, segments: UrlSegment[]) => {
  if (!checkAdmin()) {
    // empêche le module de se charger et redirige vers home
    setTimeout(() => {
      const router = inject(Router);
      router.navigate(['/']);
    });
    return false;
  }
  return true;
};
