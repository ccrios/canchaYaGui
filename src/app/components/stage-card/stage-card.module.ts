import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageCardRoutingModule } from './stage-card-routing.module';
import { StageCardComponent } from './stage-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { materialModule } from 'src/app/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [StageCardComponent],
  imports: [
    CommonModule,
    StageCardRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  exports: [
    StageCardComponent
  ]
})
export class StageCardModule { }
