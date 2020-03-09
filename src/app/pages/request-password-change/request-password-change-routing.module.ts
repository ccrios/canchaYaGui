import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestPasswordChangeComponent } from './request-password-change.component';


const routes: Routes = [
  {
    path: '',
    component: RequestPasswordChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestPasswordChangeRoutingModule { }
