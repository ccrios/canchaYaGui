import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageCardComponent } from './stage-card.component';


const routes: Routes = [
  {
    path: '',
    component: StageCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageCardRoutingModule { }
