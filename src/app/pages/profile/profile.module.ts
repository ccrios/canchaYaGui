
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
  ]
})
export class ProfileModule { }
