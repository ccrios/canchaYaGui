import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTournamentComponent } from './view-tournament.component';




const routes: Routes = [
  {
    path: '',
    component: ViewTournamentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTournamentRoutingModule { }
