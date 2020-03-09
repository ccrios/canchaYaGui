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
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }

];
