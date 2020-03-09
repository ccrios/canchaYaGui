import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagesFormComponent } from './stages-form.component';


const routes: Routes = [
  {
    path: '',
    component: StagesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesFormRoutingModule { }
