import { Routes } from '@angular/router';
import { noAuthGuard } from './core/guards/noAuth.guard';
import { AuthenticationGuard } from './core/guards/authentication.guard';


export const routes: Routes = [
    // Public routes
    {
        path: '',                
        loadChildren: () => import('./features/public/public.routes').then(m => m.publicRoutes)
    },
    // Authentication routes
    {
        path: 'login',             
        loadComponent: () => import('./features/public/pages/login-page/login-page.component').then(m => m.LoginPageComponent)
    },
    // Private routes
    {
        path: 'private',       
        canActivate: [AuthenticationGuard],
        loadChildren: () => import('./features/private/private.routes').then(m => m.privateRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];