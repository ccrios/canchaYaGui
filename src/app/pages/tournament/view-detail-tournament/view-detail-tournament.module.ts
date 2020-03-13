import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailTournamentRoutingModule } from './view-detail-tournament-routing.module';
import { ViewDetailTournamentComponent } from './view-detail-tournament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { materialModule } from 'src/app/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ViewDetailTournamentComponent],
  imports: [
    CommonModule,
    ViewDetailTournamentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule
  ],
  exports: [
  ]
})
export class ViewDetailTournamentModule { }
