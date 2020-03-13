
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from '../components/test/test.component';

export const CONTENT_ROUTES: Routes = [


  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'requestRestoredPassword',
    loadChildren: () => import('../pages/request-password-change/request-password-change.module').then(m => m.RequestPasswordChangeModule)
  },
  {
    path: 'restoredPassword',
    loadChildren: () => import('../pages/restore-passwor/restore-passwor.module').then(m => m.RestorePassworModule)

  },
  {
    path: 'restoredPassword/:validate',
    loadChildren: () => import('../pages/restore-passwor/restore-passwor.module').then(m => m.RestorePassworModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
