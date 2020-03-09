import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestorePassworRoutingModule } from './restore-passwor-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
import { RestorePassworComponent } from './restore-passwor.component';


@NgModule({
  declarations: [RestorePassworComponent],
  imports: [
    CommonModule,
    RestorePassworRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
  ]
})

export class RestorePassworModule { }
