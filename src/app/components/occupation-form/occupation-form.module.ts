import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupationFormRoutingModule } from './occupation-form-routing.module';
import { materialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { OccupationFormComponent } from './occupation-form.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OccupationFormRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  exports: [OccupationFormComponent]
})
export class OccupationFormModule { }
