import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { ContenComponent } from './layouts/conten/conten.component';
import { FullComponent } from './layouts/full/full.component';

import { CONTENT_ROUTES } from './routes/content.routes';
import { FULL_ROUTES } from './routes/full.routes';
import { AuthGuard } from './guards/auth.guard';
import { AuthRoleUserGuard } from './guards/auth-role-user.guard';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [

  {
    path: '',
    component: FullComponent,
    children: FULL_ROUTES,
    canActivate : [ AuthGuard ],
    canActivateChild : [AuthRoleUserGuard]
  },
  {
    path: '',
    component: ContenComponent,
    children: CONTENT_ROUTES,
  },

  {
    path: 'not-found',
    component: NotFoundComponent
  },

  {
    path: 'test',
    component: TestComponent
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
