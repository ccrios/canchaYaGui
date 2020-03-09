import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestPasswordChangeRoutingModule } from './request-password-change-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
import { RequestPasswordChangeComponent } from './request-password-change.component';


@NgModule({
  declarations: [RequestPasswordChangeComponent],
  imports: [
    CommonModule,
    RequestPasswordChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
  ]
})
export class RequestPasswordChangeModule { }
