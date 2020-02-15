import {Routes, RouterModule} from '@angular/router';

export const CONTENT_ROUTES: Routes = [

      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }

];
