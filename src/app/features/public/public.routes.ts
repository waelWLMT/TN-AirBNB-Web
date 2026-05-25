import { Routes } from "@angular/router";

export const publicRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/public-search-page/public-search-page.component')
                .then(m => m.PublicSearchPageComponent)
    },
];