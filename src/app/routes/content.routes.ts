import {Routes, RouterModule} from '@angular/router';
import { TestComponent } from '../components/test/test.component';

export const CONTENT_ROUTES: Routes = [

      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: 'test',
        component: TestComponent
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
