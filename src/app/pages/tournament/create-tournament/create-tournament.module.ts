import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTournamentRoutingModule } from './create-tournament-routing.module';
import { CreateTournamentComponent } from './create-tournament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModule } from 'src/app/material.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [CreateTournamentComponent],
  imports: [
    CommonModule,
    CreateTournamentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule
  ],
  exports: [
  ]
})
export class CreateTournamentModule { }
