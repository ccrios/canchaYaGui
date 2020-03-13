import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
import { AlertModule } from 'ngx-alerts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileUserComponent } from './profile-user.component';



@NgModule({
  declarations: [ProfileUserComponent],
  imports: [
    CommonModule,
    ProfileUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
    AlertModule,
    NgbModule
  ]
})
export class ProfileUserModule { }
