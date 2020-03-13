
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { materialModule } from 'src/app/material.module';
import { AlertModule } from 'ngx-alerts';
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    materialModule,
    NgbModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),

  ],
  exports: [
    TranslateModule, RegisterUserComponent
  ],
  entryComponents: [RegisterUserComponent],
})
export class LoginModule { }
