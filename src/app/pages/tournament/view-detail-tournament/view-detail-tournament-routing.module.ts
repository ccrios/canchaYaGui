import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailTournamentComponent } from './view-detail-tournament.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDetailTournamentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDetailTournamentRoutingModule { }
