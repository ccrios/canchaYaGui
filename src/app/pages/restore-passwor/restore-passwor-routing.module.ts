import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestorePassworComponent } from './restore-passwor.component';


const routes: Routes = [
  {
    path: '',
    component: RestorePassworComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestorePassworRoutingModule { }
