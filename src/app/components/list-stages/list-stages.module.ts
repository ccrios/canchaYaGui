import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStagesRoutingModule } from './list-stages-routing.module';
import { ListStagesComponent } from './list-stages.component';
import { materialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StageCardModule } from '../stage-card/stage-card.module';
import { SchedulerModule } from '../scheduler/scheduler.module';


@NgModule({
  declarations: [ListStagesComponent],
  imports: [
    CommonModule,
    ListStagesRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    StageCardModule,
    SchedulerModule
  ],
  exports: [
    ListStagesComponent
  ]
})
export class ListStagesModule { }
