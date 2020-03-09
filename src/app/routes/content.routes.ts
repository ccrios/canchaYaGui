import {Routes, RouterModule} from '@angular/router';

export const CONTENT_ROUTES: Routes = [

      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }

];
