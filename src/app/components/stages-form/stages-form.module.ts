import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesFormRoutingModule } from './stages-form-routing.module';
import { StagesFormComponent } from './stages-form.component';
import { materialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StagesFormComponent],
  imports: [
    CommonModule,
    StagesFormRoutingModule,
    materialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StagesFormModule { }
