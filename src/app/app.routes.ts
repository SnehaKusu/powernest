import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Default Route (Home Page)
  { 
    path: 'solutions/business-development', 
    loadComponent: () => import('./pages/solutions/business-development/business-development.component')
      .then(m => m.BusinessDevelopmentComponent) 
  }
];
