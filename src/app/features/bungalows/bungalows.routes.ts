import { Routes } from '@angular/router';
import { BungalowDetailPage } from './pages/bungalow-detail.page';
import { BungalowListPageComponent } from './pages/bungalow-list-page/bungalow-list-page.component';


export const BUNGALOWS_ROUTES: Routes = [
  {
    path: '',
    component: BungalowListPageComponent
  },
  {
    path: ':id',
    component: BungalowDetailPage
  }
];