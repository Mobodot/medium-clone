import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
];
