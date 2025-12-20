import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {
        path: 'login',
        loadChildren: () =>
            import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)            
    },

    {
        path: 'products',
        //canActivate: [AuthGuard], // optionnel pour le test
        loadChildren: () =>
            import('./features/products/products.routes')
                .then(m => m.PRODUCTS_ROUTES)
    },

    {
        path: '',
        canActivate: [AuthGuard], // accessible uniquement si connecté
        loadChildren: () =>
            import('./features/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: '**',
        redirectTo: '' // redirige vers home si route inconnue
    }








];
