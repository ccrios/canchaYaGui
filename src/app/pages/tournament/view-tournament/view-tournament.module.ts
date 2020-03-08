import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTournamentRoutingModule } from './view-tournament-routing.module';
import { ViewTournamentComponent } from './view-tournament.component';
import { CreateTournamentComponent as CreateTournamentComponent} from '../create-tournament/create-tournament.component';

import { materialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [ViewTournamentComponent, CreateTournamentComponent],
  imports: [
    CommonModule,
    ViewTournamentRoutingModule,
    MatTableModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateTournamentComponent]
})
export class ViewTournamentModule { }
