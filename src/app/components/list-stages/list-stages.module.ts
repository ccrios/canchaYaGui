import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStagesRoutingModule } from './list-stages-routing.module';
import { ListStagesComponent } from './list-stages.component';
import { materialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageCardModule } from '../stage-card/stage-card.module';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [ListStagesComponent],
  imports: [
    CommonModule,
    ListStagesRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    StageCardModule,
    AlertModule
  ],
  exports: [
    ListStagesComponent
  ]
})
export class ListStagesModule { }
