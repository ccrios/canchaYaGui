import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStagesComponent } from './list-stages.component';


const routes: Routes = [
  {
    path: '',
    component: ListStagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStagesRoutingModule { }
