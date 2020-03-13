
import {Routes, RouterModule} from '@angular/router';

export const CONTENT_ROUTES: Routes = [

      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: 'requestRestoredPassword',
        loadChildren: './pages/request-password-change/request-password-change.module#RequestPasswordChangeModule'
      },
      {
        path: 'restoredPassword',
        loadChildren: './pages/restore-passwor/restore-passwor.module#RestorePassworModule'
      },
      {
        path: 'restoredPassword/:validate',
        loadChildren: './pages/restore-passwor/restore-passwor.module#RestorePassworModule'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }

];
