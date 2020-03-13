import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OccupationFormComponent } from './occupation-form.component';


const routes: Routes = [
  {
    path: '',
    component: OccupationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationFormRoutingModule { }
